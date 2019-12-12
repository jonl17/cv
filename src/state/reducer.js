import {
  SET_DEVICE,
  TURN,
  REGISTER_LOCATION,
  SET_ALARM,
  INCREMENT_RGB,
} from "./action"

const initialState = {
  device: undefined,
  rotation: `0deg`,
  location: `/valin-verk/`,
  reverseRotation: false,
  rgb: 88,
}

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_DEVICE:
      let device
      if (action.width <= 550) {
        device = `mobile`
      }
      if (action.width > 550 && action.width <= 1050) {
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
    case INCREMENT_RGB:
      return { ...state, rgb: state.rgb + 10 }
    default:
      return state
  }
}
