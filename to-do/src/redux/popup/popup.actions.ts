import { PopupActionTypes, SET_SHOULD_SHOW_POPUP } from "./popup.types";

export const setShouldShowPopup = (isPopup: boolean): PopupActionTypes => ({type: SET_SHOULD_SHOW_POPUP, payload: isPopup});
