import React from "react";
import { StyledMenu, StyledMenuTitle } from "./StyledSideMenu";
import { NavLink } from "react-router-dom";

const SideMenu = () => {
  return (
    <StyledMenu>
      <NavLink to='/home'>All</NavLink>
      <StyledMenuTitle>Group</StyledMenuTitle>
      <NavLink to='/home/Study'>Study</NavLink>
      <NavLink to='/home/Work'>Work</NavLink>
      <StyledMenuTitle>Time</StyledMenuTitle>
      <NavLink to='/home/today'>Today</NavLink>
      <NavLink to='/home/tomorrow'>Tomorrow</NavLink>
      <NavLink to='/home/week'>On week</NavLink>
      <NavLink to='/home/limit'>No Limit</NavLink>
    </StyledMenu>
  );
};

export default SideMenu;
