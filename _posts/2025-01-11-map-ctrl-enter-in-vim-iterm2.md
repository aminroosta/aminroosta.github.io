---
layout: post
title:  "Map Ctrl/Shift + Enter in Vim / iTerm2"
date:   2025-01-11 21:27:10 -0500
categories: tools
---

### Method 2 (Updated on 2025-02-08):

[CSI u](https://iterm2.com/documentation-csiu.html) is an advanced method for reporting key combinations and is supported by Neovim, iTerm2, and tmux.
* Enable the `CSI u` mode in iTerm2:
  * Go to Profiles > Keys > Report keys using CSI u
    <img src="/assets/images/map-ctrl-enter-iterm2-csi-u.png"  alt="Enable CSI u in iTerm2" />
   
* Optionally, download the [CSIu-Backward-Compat.itermkeymap](https://iterm2.com/keymaps/CSIu-Backward-Compat.itermkeymap) and import it:
  * Go to Profiles > Keys > Key Mappings > Import
    <img src="/assets/images/map-ctrl-enter-iterm2-import-preset.png"  alt="Import CSI u keymap in iTerm2" />
  
* Enable [extended keys](https://github.com/tmux/tmux/wiki/Modifier-Keys) for tmux:
  ```sh
  set -s extended-keys on
  ```
* Write normal key mappings in Neovim:
  ```lua
  vim.api.nvim_set_keymap("n", "<C-Cr>", "za", { noremap = true })
  ```

### Method 1
You cannot directly map `<c-cr>` or `<s-cr>` in Vim because iTerm2 does not send those key combinations to the terminal. However, I have found an alternative: instead of mapping those key combinations directly, I configure iTerm2 to send the function keys (`F1` to `F12`) when `ctrl+enter` or `shift+enter` is pressed, and then create my Vim mappings using the function keys.

To find the escape sequence corresponding to the function keys, press `ctrl+v` in a shell prompt followed by the function key. On a MacBook, press the `fn` key along with the keys on the top row to send a function key.

Here’s what I get on my MacBook Air:
```sh
$ ^[OP    # F1
$ ^[OQ    # F2
$ ^[OR    # F3
$ ^[OS    # F4
$ ^[[15~  # F5
$ ^[[17~  # F6
$ ^[[18~  # F7
$ ^[[19~  # F8
$ ^[[20~  # F9
$ ^[[21~  # F10
$         # Nothing shows up for F11 on my machine
$ ^[[24~  # F12
```

Please note that `^[` marks the beginning of the escape sequence. Next, navigate to iTerm2 Settings > Profiles > Keys > Key Mappings, and click the `+` button. Press the key combination you wish to map, then choose the "Send Escape Sequence" action, and enter the corresponding escape sequence, omitting the `^[` portion. For example, `F1` should be entered as `OP`.

<img src="/assets/images/iterm2-f1-mapping.png" width="640" alt="Map CTRL+ENTER to F1 in iTerm2" />

Finally, be sure to update your Vim mappings:

```lua
-- I have assigned ctrl+enter to F1 in iTerm2
-- and I am mapping it to toggle a fold with za
vim.api.nvim_set_keymap("n", "<F1>", "za", { noremap = true })
```
