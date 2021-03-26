export const SET_SHOULD_SHOW_POPUP = 'SET_SHOULD_SHOW_POPUP';

interface SET_IS_POPUP {
  type: typeof SET_SHOULD_SHOW_POPUP;
  payload: boolean;
}

export interface PopupState {
  shouldShowPopup: boolean;
}

export type PopupActionTypes = SET_IS_POPUP;
