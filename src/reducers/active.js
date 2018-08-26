const SET_ACTIVE = 'SET_ACTIVE'

export const setActive = page => ({
  type: SET_ACTIVE,
  page
})

export const active = (state = 'Home', action) => {
  switch (action.type) {
    case SET_ACTIVE:
      return action.page
    default:
      return state
  }
}
