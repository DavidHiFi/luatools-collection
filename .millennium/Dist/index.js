const MILLENNIUM_IS_CLIENT_MODULE = true;
const pluginName = "luatools-collection";
function InitializePlugins() {
    var _a;
    (_a = (window.PLUGIN_LIST || (window.PLUGIN_LIST = {})))[pluginName] || (_a[pluginName] = {});
    window.MILLENNIUM_SIDEBAR_NAVIGATION_PANELS || (window.MILLENNIUM_SIDEBAR_NAVIGATION_PANELS = {});
}
InitializePlugins()
const __call_server_method__ = (methodName, kwargs) => Millennium.callServerMethod(pluginName, methodName, kwargs)
function __wrapped_callable__(route) {
    if (route.startsWith('webkit:')) {
        return MILLENNIUM_API.callable((methodName, kwargs) => MILLENNIUM_API.__INTERNAL_CALL_WEBKIT_METHOD__(pluginName, methodName, kwargs), route.replace(/^webkit:/, ''));
    }
    return MILLENNIUM_API.callable(__call_server_method__, route);
}
let PluginEntryPointMain = function() { var millennium_main = (function (exports, client, react) {
	'use strict';

	let store;
	let pluginConfig = {
	  name: "Lua Tools",
	  replace: true,
	  show_disabled: false
	};
	let refreshTimer;
  let refreshing = false;
  let lastSignature = "";
  function parseIds(raw) {
    let decoded = raw;
    try { const value = JSON.parse(raw); if (typeof value === "string") decoded = value; } catch {}
    return [...new Set(decoded.split(",").map(Number).filter(id => Number.isSafeInteger(id) && id > 0))].sort((a, b) => a - b);
  }
  async function DoStuff(force = true) {
    if (refreshing) return;
    refreshing = true;
    try {
      const ids = parseIds(await __wrapped_callable__("luatools_get_ids")({ showDisabled: pluginConfig.show_disabled }));
      const signature = JSON.stringify([pluginConfig, ids]);
      if (!force && signature === lastSignature) return;
	  console.log("[luatools-collection] Refreshing collection");
	  const coll = store.GetUserCollectionsByName(pluginConfig.name)?.[0] || store.NewUnsavedCollection(pluginConfig.name, null, []);
	  if (!coll) {
	    return console.log("[luatools-collection] No collection found");
	  }
	  if (pluginConfig.replace) {
	    coll.RemoveApps([...coll.allApps]);
	  }
	
	  for (const id of ids) {
	    coll.m_setAddedManually.add(id);
	    coll.apps.add(id);
	  }
	  coll.Save();
	  store.SaveCollection(coll);
      lastSignature = signature;
    } finally { refreshing = false; }
  }
	async function pluginMain() {
	  console.log("[luatools-collection] Frontend startup");
	  await App.WaitForServicesInitialized();
	  while (
	    // @ts-ignore
	    typeof collectionStore === "undefined"
	  ) {
	    await client.sleep(100);
	  }
	  store = collectionStore;
	  const storedConfig = JSON.parse(localStorage.getItem("clem.la.luatools-collection.config"));
	  pluginConfig = { ...pluginConfig, ...storedConfig };
	  console.log("[luatools-collection] Merged config:", pluginConfig);
	  await DoStuff();
    refreshTimer = setInterval(() => { DoStuff(false).catch(console.error); }, 15000);
  }
	const SingleSetting = (props) => {
	  const [boolValue, setBoolValue] = react.useState(false);
	  const [isDisabled, setIsDisabled] = react.useState(false);
	  const saveConfig = () => {
	    localStorage.setItem("clem.la.luatools-collection.config", JSON.stringify(pluginConfig));
	  };
	  react.useEffect(() => {
	    if (props.type === "bool") {
	      setBoolValue(pluginConfig[props.name]);
	    }
	    if (props.readonly) {
	      setIsDisabled(true);
	    }
	  }, []);
	  switch (props.type) {
	    case "bool":
	      return /* @__PURE__ */ window.SP_REACT.createElement(client.Field, { label: props.label, description: props.description, bottomSeparator: props.bottomSeparator || "standard", focusable: true }, /* @__PURE__ */ window.SP_REACT.createElement(client.Toggle, { disabled: isDisabled, value: boolValue, onChange: (value) => {
	        setBoolValue(value);
	        pluginConfig[props.name] = value;
	        saveConfig();
	      } }));
	    case "text":
	      return /* @__PURE__ */ window.SP_REACT.createElement(client.Field, { label: props.label, description: props.description, bottomSeparator: props.bottomSeparator || "standard", focusable: true }, /* @__PURE__ */ window.SP_REACT.createElement(client.TextField, { disabled: isDisabled, defaultValue: pluginConfig[props.name], onChange: (e) => {
	        pluginConfig[props.name] = e.currentTarget.value;
	        saveConfig();
	      } }));
	    case "button":
	      return /* @__PURE__ */ window.SP_REACT.createElement(client.Field, { label: props.label, description: props.description, bottomSeparator: props.bottomSeparator || "standard", focusable: true }, /* @__PURE__ */ window.SP_REACT.createElement(client.Toggle, { disabled: isDisabled, value: boolValue, onChange: async (value) => {
	        if (value) {
	          setBoolValue(true);
	          try {
	            await props.action();
	          } catch (e) {
	            console.error(e);
	          }
	          setTimeout(() => {
	            setBoolValue(false);
	          }, 500);
	        }
	      } }));
	  }
	};
	const SettingsContent = () => {
	  return /* @__PURE__ */ window.SP_REACT.createElement("div", null, /* @__PURE__ */ window.SP_REACT.createElement(SingleSetting, { name: "name", type: "text", label: "Collection name", description: "The name of the targeted collection" }), /* @__PURE__ */ window.SP_REACT.createElement(SingleSetting, { name: "replace", type: "bool", label: "Empty the collection before adding", description: "Will remove previously added games to get current ones only.", bottomSeparator: "none" }), /* @__PURE__ */ window.SP_REACT.createElement(SingleSetting, { name: "show_disabled", type: "bool", label: "Show disabled games", description: "Shouldn't be visible in the library but still.." }), /* @__PURE__ */ window.SP_REACT.createElement(client.Field, { bottomSeparator: "thick" }), /* @__PURE__ */ window.SP_REACT.createElement(SingleSetting, { name: "refresh", type: "button", label: "Refresh collection", description: "Refresh the collection for some reason", bottomSeparator: "standard", action: DoStuff }));
	};
	var index = client.definePlugin(async () => {
	  await pluginMain();
	  return {
	    title: "Lua Tools Collection",
	    icon: /* @__PURE__ */ window.SP_REACT.createElement(client.IconsModule.Settings, null),
	    content: /* @__PURE__ */ window.SP_REACT.createElement(SettingsContent, null),
    onDismount: () => clearInterval(refreshTimer)
	  };
	});

	exports.default = index;

	Object.defineProperty(exports, '__esModule', { value: true });

	return exports;

})({}, window.MILLENNIUM_API, window.SP_REACT);
 return millennium_main; };
async function ExecutePluginModule() {
    let PluginModule = PluginEntryPointMain();
    /** Assign the plugin on plugin list. */
    Object.assign(window.PLUGIN_LIST[pluginName], {
        ...PluginModule,
        __millennium_internal_plugin_name_do_not_use_or_change__: pluginName,
    });
    /** Run the rolled up plugins default exported function */
    let pluginProps = await PluginModule.default();
    function isValidSidebarNavComponent(obj) {
        return obj && obj.title !== undefined && obj.icon !== undefined && obj.content !== undefined;
    }
    if (pluginProps && isValidSidebarNavComponent(pluginProps)) {
        window.MILLENNIUM_SIDEBAR_NAVIGATION_PANELS[pluginName] = pluginProps;
    }
    /** If the current module is a client module, post message id=1 which calls the front_end_loaded method on the backend. */
    if (MILLENNIUM_IS_CLIENT_MODULE) {
        MILLENNIUM_BACKEND_IPC.postMessage(1, { pluginName: pluginName });
    }
}
ExecutePluginModule()
