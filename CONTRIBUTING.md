# Contributing

Thanks for helping luatools-collection. It ships a prebuilt Millennium plugin, so source changes go through a build.

## Ways to help

- Report plugin crashes and Steam client breakage
- Send Lua and TypeScript fixes
- Check the shipped bundle after changes

## Getting set up

The plugin ships as `.millennium/Dist/index.js`. Rebuild it with:

```
pnpm install --frozen-lockfile
pnpm build
```

## Checks before a pull request

- Rebuild and confirm `.millennium/Dist/index.js` reflects your change
- Load the plugin in Steam and exercise the tools you touched

## Where to submit

Open issues and pull requests in this repository.