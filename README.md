# Lua Tools Collection

A Millennium plugin that creates a Steam library collection named **Lua Tools** from the Lua scripts in Steam's `config/stplug-in` directory.

This fork preserves the original Steamtools collection plugin's four settings: Collection name, Empty the collection before adding, Show disabled games, and Refresh collection. Version 0.0.2 also checks the Lua script list every 15 seconds and refreshes when the list or settings change. New games appear without restarting Steam. Unchanged checks do not rewrite the collection, and a failed backend request leaves the existing collection intact.

The parser accepts both plain CSV and Millennium's JSON-quoted CSV response. This fixes the original bug that dropped the last game from the returned list. Empty lists do not add a bogus app ID zero.

## Install

1. Install [Millennium](https://steambrew.app).
2. Download [luatools-collection.zip](https://github.com/DavidHiFi/luatools-collection/releases/latest/download/luatools-collection.zip).
3. Extract the `luatools-collection` folder into Steam's `millennium/plugins` folder. On a default Windows installation, this is `C:\Program Files (x86)\Steam\millennium\plugins`.
4. Restart Steam when convenient, then enable **Lua Tools Collection** under Steam > Millennium > Plugins.
5. Disable the original Steamtools collection plugin if you want only the Lua Tools collection to refresh.

The default collection name is `Lua Tools`. You can change it in the plugin settings. The plugin only reads script filenames and updates a library collection. It does not download games, generate manifests, or modify the Lua scripts.

## Build

The repository includes the renamed, prebuilt frontend in `.millennium/Dist/index.js`, so the release ZIP needs no build step. To rebuild from source, run `pnpm install --frozen-lockfile` and `pnpm build`.

## Credits and license

Recovered from the user's installed copy of `clemdotla/steamtools-collection`.

- Original plugin: clem.la / clemdotla.
- Original package author: [luthor112](https://github.com/luthor112).
- Inspiration: [Steam Librarian](https://github.com/luthor112/steam-librarian) and [Steam Collections Plus](https://github.com/luthor112/steam-collections-plus).
- [Millennium / Steambrew](https://steambrew.app).
- Renamed distribution: DavidHiFi.

The recovered package declares the MIT license in `package.json`. The original installed files did not include a separate license file. See `LICENSE` for the MIT terms and original contributor attribution.
