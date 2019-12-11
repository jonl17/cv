import { SET_DEVICE, TURN, REGISTER_LOCATION } from "./action"

const initialState = {
  device: undefined,
  rotation: `0deg`,
  location: `/valin-verk/`,
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
    default:
      return state
  }
}
