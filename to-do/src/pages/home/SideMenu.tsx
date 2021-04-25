import React from "react";
import { StyledMenu } from "./StyledSideMenu";
import { NavLink } from "react-router-dom";

const SideMenu = () => {
  return (
    <StyledMenu>
      <NavLink to='/home' >All</NavLink>
      <NavLink to='/home/Study' >Study</NavLink>
      <NavLink to='/home/Work' >Work</NavLink>
    </StyledMenu>
  );
};

export default SideMenu;
