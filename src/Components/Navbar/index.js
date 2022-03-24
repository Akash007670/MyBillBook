import React from "react";
import myBillBookLogo from "../../assets/mbb_logo.svg";
import { FaBars } from "react-icons/fa";
import {
  MobileIcon,
  Nav,
  NavbarContainer,
  NavItem,
  NavLinks,
  NavLogo,
  NavMenu,
} from "./NavbarElements";

const Navbar = () => {
  return (
    <>
      <Nav>
        <NavbarContainer>
          <NavLogo to="/">
            <img src={myBillBookLogo} alt="mybillbook logo" />
          </NavLogo>
          <MobileIcon>
            <FaBars />
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLinks to="myBillBook">Why Use My BillBook?</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="who-is-it-for">Who is it For?</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="online-store">Online Store</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="pricing">Pricing</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="faqs">FAQs</NavLinks>
            </NavItem>
          </NavMenu>
        </NavbarContainer>
      </Nav>
    </>
  );
};

export default Navbar;
