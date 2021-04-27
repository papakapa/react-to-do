import { PopupActionTypes, PopupState } from "./popup.types";

const initialState: PopupState = {
  shouldShowPopup: false
};

const popupReducer = (state = initialState, action: PopupActionTypes) => {
  switch (action.type) {
    case "SET_SHOULD_SHOW_POPUP":
      return {
        ...state,
        shouldShowPopup: action.payload
      }
    default:
      return state
  }
};

export default popupReducer;