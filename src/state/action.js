export const SET_DEVICE = "SET_DEVICE"
export const setDevice = width => ({
  type: SET_DEVICE,
  width,
})
export const TURN = "TURN"
export const turn = deg => ({
  type: TURN,
  deg,
})
export const REGISTER_LOCATION = "REGISTER_LOCATION"
export const registerLocation = location => ({
  type: REGISTER_LOCATION,
  location,
})
