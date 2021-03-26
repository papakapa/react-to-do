import React from 'react';
import { useSelector } from 'react-redux';
import AddToDoPopup from './AddToDoPopup';
import { getShouldShowPopup } from "../../redux/popup/popup.selector";
import { PopupWrapper } from './StyledPopup';

const Popup = () => {
  const shouldShowPopup = useSelector(getShouldShowPopup);

  if (!shouldShowPopup) {
    return null;
  }

  return (
    <>
      <PopupWrapper/>
      <AddToDoPopup />
    </>
  );
};

export default Popup;
