import { SET_DEVICE, TURN, REGISTER_LOCATION, SET_ALARM } from "./action"

const initialState = {
  device: undefined,
  rotation: `0deg`,
  location: `/valin-verk/`,
  reverseRotation: false,
}

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_DEVICE:
      let device
      if (action.width <= 750) {
        device = `mobile`
      }
      if (action.width > 750 && action.width <= 1050) {
        device = `tablet`
      }
      if (action.width > 1050) {
        device = `browser`
      }
      return { ...state, device: device }
    case TURN:
      return { ...state, rotation: action.deg }
    case REGISTER_LOCATION:
      return { ...state, location: action.location }
    case SET_ALARM:
      return { ...state, reverseRotation: !state.reverseRotation }
    default:
      return state
  }
}
