[back to home](./index.html)

## Mapping Ctrl+Enter and Shift+Enter in Neovim within iTerm2

You can't directly map `<c-cr>` or `<s-cr>` in vim, because iterm2 doesn't send those key combinations to the terminal.
However, I've found an alternative: instead of mapping those key combinations directly,
I would get iterm2 to send the function keys (`F1` to `F12`) when `ctrl+enter` or `shift+enter` is pressed; and, create my Vim mappings using the function keys.

To find the escape sequence keys corresponding to the function keys, press `ctrl+v` in a shell prompt followed by the function key.
On a MacBook, press fn along with the keys on the top row to press a function key.

Here's what I get on my MacBook Air:
```sh
$ ^[OP  # F1
$ ^[OQ  # F2
$ ^[OR  # F3
$ ^[OS  # F4
$ ^[[15~  #F5
$ ^[[17~  #F6
$ ^[[18~  #F7
$ ^[[19~  #F8
$ ^[[20~  #F9
$ ^[[21~  #F10
$         # Nothing shows up for F11 on my machine
$ ^[[24~  #F12
```

Please note that `^[` marks the beginning of the escape sequence.
Next, navigate to iTerm2 Settings > Profiles > Keys > Key Mappings, and click the `+` button.
Press the key combination you wish to map, then choose the "Send Escape Sequence" action, and enter the corresponding escape sequence, omitting the `^[` portion.
For example, `F1` should be entered as `OP`.

@import "assets/iterm2-f1-mapping.png" { width=640px title="Map CTRL+ENTER to F1 on iTerm2"}

And finally, be sure to update your vim mappings:

```lua
-- I've assigned ctrl+enter to F1 on iTerm2
-- and I'm mapping it to toggle a fold with za
vim.api.nvim_set_keymap("n", "<F1>", "za", { noremap = true })
```
