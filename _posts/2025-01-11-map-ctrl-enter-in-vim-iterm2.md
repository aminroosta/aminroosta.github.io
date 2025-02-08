---
layout: post
title:  "Map Ctrl/Shift + Enter in Vim / iTerm2"
date:   2025-01-11 21:27:10 -0500
categories: tools
---

### Method 2 (updated at 2025-02-08):

[CSI u](https://iterm2.com/documentation-csiu.html) is an advanced way of reporting key combinations and is supported by neovim, iterm2 and tmux.
* Enable the `CSI u` mode in iterm2.
  * Profiles > Keys > Report keys using CSI u
    <img src="/assets/images/map-ctrl-enter-iterm2-csi-u.png"  alt="enable CSI u in Iterm2" />
   
* Optionally download the [CSIu-Backward-Compat.itermkeymap](https://iterm2.com/keymaps/CSIu-Backward-Compat.itermkeymap) and import it.
  * Profiles > Keys > Key Mappings > Import
    <img src="/assets/images/map-ctrl-enter-iterm2-import-preset.png"  alt="enable CSI u in Iterm2" />
  
* Enable [extended-keys](https://github.com/tmux/tmux/wiki/Modifier-Keys
) for tmux.
  ```sh
  set -s extended-keys on
  ```
* Write normal key mappings in neovim:
  ```lua
  vim.api.nvim_set_keymap("n", "<C-Cr>", "za", { noremap = true })
  ```

### Method 1
You can't directly map `<c-cr>` or `<s-cr>` in vim, because iTerm2 doesn't send those key combinations to the terminal.
However, I've found an alternative: instead of mapping those key combinations directly,
I would get iTerm2 to send the function keys (`F1` to `F12`) when `ctrl+enter` or `shift+enter` is pressed; and, create my Vim mappings using the function keys.

To find the escape sequence keys corresponding to the function keys, press `ctrl+v` in a shell prompt followed by the function key.
On a MacBook, press fn along with the keys on the top row to send a function key.

Here's what I get on my MacBook Air:
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
$ ^[[24~  #F12
```

Please note that `^[` marks the beginning of the escape sequence.
Next, navigate to iTerm2 Settings > Profiles > Keys > Key Mappings, and click the `+` button.
Press the key combination you wish to map, then choose the "Send Escape Sequence" action, and enter the corresponding escape sequence, omitting the `^[` portion.
For example, `F1` should be entered as `OP`.

<img src="/assets/images/iterm2-f1-mapping.png" width="640" alt="Map CTRL+ENTER to F1 on iTerm2" />

And finally, be sure to update your vim mappings:

```lua
-- I've assigned ctrl+enter to F1 on iTerm2
-- and I'm mapping it to toggle a fold with za
vim.api.nvim_set_keymap("n", "<F1>", "za", { noremap = true })
```
