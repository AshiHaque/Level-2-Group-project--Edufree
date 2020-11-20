import React from "react";
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink,
} from "./NavbarElements";
const Navbar = () => {
  return (
    <>
      <Nav>
        <NavLink to="/">
          <h1>Logo here</h1>
        </NavLink>
        <Bars />
        <NavMenu>
          <NavLink to="/courses" activeStyle>
            Courses
          </NavLink>
          <NavLink to="/forum" activeStyle>
            Forum
          </NavLink>
          <NavLink to="/Sign-in" activeStyle>
            Sign up
          </NavLink>
        </NavMenu>
        <NavBtn>
          <NavBtnLink to="/signin">Sign In</NavBtnLink>
        </NavBtn>
      </Nav>
    </>
  );
};

export default Navbar;
