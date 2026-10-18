<div align="center">

<img src="https://socialify.git.ci/DavidHiFi/luatools-collection/image?description=1&font=Inter&language=1&name=1&owner=1&pattern=Plus&theme=Dark" alt="Lua Tools Collection by DavidHiFi" width="100%">

# Lua Tools Collection

**A Millennium plugin that groups every game with a Lua Tools script into one Steam library collection.**

It keeps itself up to date while Steam runs.

<a href="https://github.com/DavidHiFi/luatools-collection/releases/latest">
<img src="https://img.shields.io/badge/%E2%AC%87%EF%B8%8F%20DOWNLOAD%20LATEST%20RELEASE-2EA043?style=for-the-badge&labelColor=161B22" alt="Download the latest release" height="42">
</a>

<br><br>

<img src="https://img.shields.io/github/v/release/DavidHiFi/luatools-collection?style=flat-square&label=version&color=8957E5&labelColor=161B22" alt="Latest version">
<img src="https://img.shields.io/github/downloads/DavidHiFi/luatools-collection/total?style=flat-square&label=downloads&color=1F6FEB&labelColor=161B22" alt="Total downloads">
<img src="https://img.shields.io/badge/platform-Steam%20%7C%20Windows-DB6D28?style=flat-square&labelColor=161B22" alt="Platforms: Steam and Windows">

</div>

---

## Installation

1. Install [Millennium](https://steambrew.app).
2. Download [luatools-collection.zip](https://github.com/DavidHiFi/luatools-collection/releases/latest/download/luatools-collection.zip).
3. Extract into Steam's `millennium/plugins` folder (default: `C:\Program Files (x86)\Steam\millennium\plugins`).
4. Restart Steam and enable **Lua Tools Collection** under Steam > Millennium > Plugins.

## Features

- **Lua Tools collection:** every game with a script in `config/stplug-in` lands in one library collection.
- **Stays current:** checks every 15 seconds and updates the collection when scripts or settings change.
- **Original settings kept:** the four settings from the Steamtools plugin still work.
- **Last game fixed:** the original plugin skipped the last game in the list; this one does not.

<details>
<summary><b>Building from source</b></summary>

<br>

The release ZIP is already built (`.millennium/Dist/`). To rebuild it:

```sh
pnpm install --frozen-lockfile
pnpm build
```

</details>

## Contributing

Bug reports, feature ideas and pull requests are welcome. See [CONTRIBUTING.md](CONTRIBUTING.md).

<a href="CONTRIBUTING.md">
<img src="https://img.shields.io/badge/%F0%9F%A4%9D%20HOW%20TO%20CONTRIBUTE-8957E5?style=for-the-badge&labelColor=161B22" alt="How to contribute" height="36">
</a>

## Star history

Thanks for the stars and plugin reports.

<a href="https://www.star-history.com/?repos=DavidHiFi%2Fluatools-collection&amp;type=date">
  <picture>
    <source media="(prefers-color-scheme: dark)" srcset="https://api.star-history.com/chart?repos=DavidHiFi/luatools-collection&amp;type=date&amp;theme=dark&amp;legend=top-left" />
    <source media="(prefers-color-scheme: light)" srcset="https://api.star-history.com/chart?repos=DavidHiFi/luatools-collection&amp;type=date" />
    <img alt="DavidHiFi/luatools-collection GitHub star history" src="https://api.star-history.com/chart?repos=DavidHiFi/luatools-collection&amp;type=date" />
  </picture>
</a>

## Credits

- **Author:** Myself, [DavidHiFi](https://github.com/DavidHiFi)

| Who | What |
|---|---|
| **clem.la (clemdotla)** | The original Steamtools collection plugin this one was recovered from (MIT). I could not find a live link; if you know it, open an issue. |
| **luthor112** ([GitHub](https://github.com/luthor112)) | Co-author of the original plugin, and the [Steam Librarian](https://github.com/luthor112/steam-librarian) and [Steam Collections Plus](https://github.com/luthor112/steam-collections-plus) plugins it learned from. |

Built on [Millennium](https://steambrew.app) for [Steam](https://store.steampowered.com), with [TypeScript](https://www.typescriptlang.org), [Lua](https://www.lua.org) and [pnpm](https://pnpm.io).

> Missing or wrong credit? [Open an issue](https://github.com/DavidHiFi/luatools-collection/issues/new) and I'll fix it.

## Disclaimers

Most of this project's code was developed with AI coding agents, including Claude Code, Codex and OpenCode. No single AI agent made the project.

The plugin only reads the script file names in Steam's `config/stplug-in` folder. It does not download games or change any scripts.

<div align="center">
<br>
<sub>Not affiliated with Steam, Steamworks, Millennium or clemdotla. Requires Steam and the Millennium plugin framework.</sub>
</div>
