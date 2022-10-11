import React from "react";
import myBillBookLogo from "../../assets/mbb_logo.svg";
import { FaBars } from "react-icons/fa";
import {
  MobileIcon,
  Nav,
  NavItem,
  NavLinks,
  NavLogo,
  NavMenu,
} from "./NavbarElements";

const Navbar = () => {
  return (
    <>
      <Nav>
        <NavLogo to="/">
          <img src={myBillBookLogo} alt="mybillbook logo" />
        </NavLogo>
        <MobileIcon>
          <FaBars />
        </MobileIcon>
        <NavMenu>
          <NavItem>
            <NavLinks to="/">Why Use My BillBook?</NavLinks>
          </NavItem>
          <NavItem>
            <NavLinks to="/">Who is it For?</NavLinks>
          </NavItem>
          <NavItem>
            <NavLinks to="/">Online Store</NavLinks>
          </NavItem>
          <NavItem>
            <NavLinks to="/">Pricing</NavLinks>
          </NavItem>
          <NavItem>
            <NavLinks to="/">FAQs</NavLinks>
          </NavItem>
        </NavMenu>
      </Nav>
    </>
  );
};

export default Navbar;
