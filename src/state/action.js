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
export const SET_ALARM = "SET_ALARM"
export const setAlarm = () => ({
  type: SET_ALARM,
})
export const INCREMENT_RGB = "INCREMENT_RGB"
export const incrementRGB = () => ({
  type: INCREMENT_RGB,
})
