import {RootState} from '../index';
import { PopupState } from './popup.types';

const getPopupState = (state: RootState): PopupState => state.popup;

const getShouldShowPopup = (state: RootState) => getPopupState(state).shouldShowPopup;

export { getShouldShowPopup };
