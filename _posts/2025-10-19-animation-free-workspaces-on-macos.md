---
layout: post
title:  "Animation-Free Workspaces on MacOS"
date:   2025-10-19 10:00:00 0000
categories: tools
---

### The Problem: Sluggish Workspace Switching

MacOS native workspaces include transition animations that create noticeable delays when switching between them. Adjusting system settings cannot fully remove this lag. However [Aerospace](https://github.com/nikitabobko/AeroSpace), a macOS window manager inspired by i3, can be used to remove the animation delay.

### Installing Aerospace and Setting Up the Config

Aerospace can be installed via Homebrew (`brew install --cask nikitabobko/tap/aerospace`) and is configured through `~/.config/aerospace/aerospace.toml`.  

```toml
# Default layout settings
default-root-container-layout = 'accordion'
default-root-container-orientation = 'auto'

# Zero out gaps for no wasted space
[gaps]
inner.horizontal = 0
inner.vertical = 0
outer.left = 0
outer.bottom = 0
outer.top = 0
outer.right = 0

# Keybindings for workspace switching (we'll enhance this with a script)
[mode.main.binding]
ctrl-h = 'exec-and-forget source ~/.config/aerospace/aerospace.sh && switch_workspace -1'
ctrl-l = 'exec-and-forget source ~/.config/aerospace/aerospace.sh && switch_workspace +1'
ctrl-shift-l = 'exec-and-forget source ~/.config/aerospace/aerospace.sh && move_to_workspace +1'
ctrl-shift-h = 'exec-and-forget source ~/.config/aerospace/aerospace.sh && move_to_workspace -1'

# Make all new windows floating by default
[[on-window-detected]]
run = ['layout floating']
```

Every app window floats freely now—no more tiling.


### The Magic Trick: A Bash Script for Navigation

A bash script at `~/.config/aerospace/aerospace.sh` calculates next/previous workspaces.

It uses two functions:
- `switch_workspace` for changing workspaces  
- `move_to_workspace` for shifting the active window with the switch  

These are bound to `ctrl+h/l` for navigation and `ctrl+shift+h/l` for moving windows.

```bash
switch_workspace() {
  offset=$1
  workspaces="1 2 3 4"
  current_workspace=$(aerospace list-workspaces --monitor focused --visible)
  workspaces_array=($workspaces)
  
  # Find current index
  for i in "${!workspaces_array[@]}"; do
    if [ "${workspaces_array[i]}" = "$current_workspace" ]; then
      current_index=$i
      break
    fi
  done
  
  # Calculate target without wrapping
  target_index=$((current_index + offset))
  if (( target_index &lt; 0 )); then
    target_index=0
  elif (( target_index &gt;= ${#workspaces_array[@]} )); then
    target_index=$(( ${#workspaces_array[@]} - 1 ))
  fi
  
  # Switch
  aerospace workspace "${workspaces_array[target_index]}"
}

move_to_workspace() {
  offset=$1
  workspaces="1 2 3 4"
  current_workspace=$(aerospace list-workspaces --monitor focused --visible)
  workspaces_array=($workspaces)
  
  # Find current index
  for i in "${!workspaces_array[@]}"; do
    if [ "${workspaces_array[i]}" = "$current_workspace" ]; then
      current_index=$i
      break
    fi
  done
  
  # Calculate target with wrapping for moving
  target_index=$(( (current_index + offset + ${#workspaces_array[@]}) % ${#workspaces_array[@]} ))
  target_workspace="${workspaces_array[target_index]}"
  
  # Move and switch
  aerospace move-node-to-workspace "$target_workspace"
  aerospace workspace "$target_workspace"
}
```



You can view my complete configs here: 
<a href="https://github.com/aminroosta/aminroosta.github.io/raw/refs/heads/gh-pages/assets/download/aerospace.toml?download=">aerospace.toml</a> 
and 
<a href="https://github.com/aminroosta/aminroosta.github.io/raw/refs/heads/gh-pages/assets/download/aerospace.sh?download=">aerospace.sh</a>.
