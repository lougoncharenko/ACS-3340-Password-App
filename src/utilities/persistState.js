const PasswordState = "Password_State"

// Load State
export const loadState = () => {
  try {
    const serializedState = localStorage.getItem(PasswordState)
    if (serializedState === null) {
      return undefined
    }
    return JSON.parse(serializedState)
  } catch(err) {
    return undefined
  }
}

// Save State
export const saveState = (state) => {
  try {
    const serializedState = JSON.stringify(state)
    localStorage.setItem(PasswordState, serializedState)
  } catch(err) {
    console.log("Error saving data:"+err)
  }
}