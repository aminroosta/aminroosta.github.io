switch_workspace() {
  offset=$1
  
  # Get the list of workspaces
  # workspaces=$(aerospace list-workspaces --monitor focused --empty no)
  
  workspaces="1 2 3 4"
  
  # Get the currently active workspace
  current_workspace=$(aerospace list-workspaces --monitor focused --visible)
  
  # Find the index of the current workspace in the list
  workspaces_array=($workspaces)
  for i in "${!workspaces_array[@]}"; do
    if [ "${workspaces_array[i]}" = "$current_workspace" ]; then
      current_index=$i
      break
    fi
  done
  
  # Calculate the index of the target workspace without wrapping around
  target_index=$((current_index + offset))
  
  # Ensure the target index is within the bounds of the array
  if (( target_index < 0 )); then
    target_index=0
  elif (( target_index >= ${#workspaces_array[@]} )); then
    target_index=$(( ${#workspaces_array[@]} - 1 ))
  fi
  
  # Switch to the target workspace
  aerospace workspace "${workspaces_array[target_index]}"
}

# Usage:
# switch_workspace +1  # Move to the next workspace
# switch_workspace -1  # Move to the previous workspace

move_to_workspace() {
  offset=$1
  
  # workspaces=$(aerospace list-workspaces --monitor focused)
  workspaces="1 2 3 4"
  workspaces_array=($workspaces)
  
  # Get the currently active workspace
  current_workspace=$(aerospace list-workspaces --monitor focused --visible)
  
  # Find the index of the current workspace in the list
  for i in "${!workspaces_array[@]}"; do
    if [ "${workspaces_array[i]}" = "$current_workspace" ]; then
      current_index=$i
      break
    fi
  done
  
  # Calculate the index of the target workspace, wrapping around if necessary
  target_index=$(( (current_index + offset + ${#workspaces_array[@]}) % ${#workspaces_array[@]} ))
  target_workspace="${workspaces_array[target_index]}"
  
  # Move the current window to the target workspace and switch to it
  aerospace move-node-to-workspace "$target_workspace"
  aerospace workspace "$target_workspace"
}

# Usage:
# move_to_workspace +1 # Move to the next workspace
# move_to_workspace -1 # Move to the previous workspace
