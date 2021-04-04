import React from 'react';
import {useDispatch} from "react-redux";
import {signOut} from '../../redux/auth/auth.actions';
import {StyledHeader} from './StyledHeader';

const Header = () => {
  const dispatch = useDispatch();

  const logOut = () => dispatch(signOut());

  return (
    <StyledHeader>
      <button onClick={logOut}>Выйти</button>
    </StyledHeader>
  );
};

export default Header;
