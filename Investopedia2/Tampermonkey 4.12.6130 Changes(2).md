---
alias: [Tampermonkey • 4.12.6130 Changes]
created: 2021-03-01T16:47:25 (UTC +11:00)
tags: [Tampermonkey • 4.12.6130 Changes, Tampermonkey 4.12.6130 Changes]
source: https://www.tampermonkey.net/changelog.php?version=4.12.6130&ext=fire&updated=true&old=4.12.6130&intr=true
author: 
---

# Tampermonkey • 4.12.6130 Changes

> ## Excerpt
> Click here to see the latest fixes and additions of Tampermonkey 4.12.6130.

---

Tampermonkey 4.12.6130 Changes
General:

**[Userscript Search](https://www.userscript.zone/?utm_source=tm.net&utm_medium=changelog) integration** (search on action menu entry click, on action menu open or always)

**@antifeature support**

Sandbox fixes

Speed up injection

Speed up and fix handling of large GM\_xhr responses

GM\_xhr data might be available at readyState 3 now

Add option whether to import script data and/or externals

Fix SHA-256 calculation for sub-resource integration (SRI) check of some files

**Add Userscript menu commands to the page's context menu**

**@run-at context-menu scripts now require a @require or @match statement**(like all other scripts)

Allow experimental GM\_addElement to operate on shadow DOM

Update CodeMirror editor to version 5.58.2

Update JSZip to 3.5.0

UI:

Improve search bar to not hide script content

Add option to automatically highlight selected or hovered words

Fix the 'Find Next' button after search was opened

Fix flashing layout shift if an @include's favicon can't be loaded

Remember the last chosen cloud storage at the 'Utilities' tab

Make the 'Dashboard' item's alt action (Ctrl Click, middle or right mouse click) open it with the current tab's URL as filter

**Add script trash**

Add script removal entry to action menu

Add a default @icon tag showing the domain's favicon if a URL is available

Add an option to add the current domain to the blacklisted pages list

Add a reload button to the script storage tab

Firefox:

Make GM\_xhr not send Tampermonkey's origin by default

Experimental:

Top-level await support

Locales:

**Add Danish translation** | thanks to [will2022](https://github.com/will2022)

Update Japanese translation | thanks to [shirayuki](https://github.com/shirayuki)

Update Italian translation | thanks to [bovirus](https://github.com/bovirus)

Update Turkish translation | thanks to [Tmp341](https://github.com/Tmp341)

Update Chinese (simplified) translation | thanks to [xiaopangju](https://github.com/xiaopangju)

Update Chinese (traditional) translation | thanks to [asthzh](https://github.com/asthzh)

Update Chinese (simplified) translation | thanks to [ff98sha](https://github.com/ff98sha)
