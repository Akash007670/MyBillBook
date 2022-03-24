import styled from "styled-components";
import { Link as LinkR } from "react-router-dom";
import { Link as LinkS } from "react-router-dom";

export const Nav = styled.nav`
  display: flex;
  /* border: 2px solid red; */
  width: 100%;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  /* position: sticky; */
  top: 0;
  z-index: 10;

  @media screen and (max-width: 960px) {
    transition: 0.8s all ease;
  }
`;

export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  /* border: 2px solid green; */
  align-items: center;
  height: 80px;
  width: 100%;
  padding: 0 24px;
  max-width: 1500px;
`;

export const NavLogo = styled(LinkR)`
  cursor: pointer;
  align-items: center;
  justify-content: center;
  text-align: center;
`;

export const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 968px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
    color: black;
  }
`;

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;

  @media screen and (max-width: 968px) {
    display: none;
  }
`;

export const NavItem = styled.li`
  display: flex;
  font-style: "Poppins";
  font-weight: 700;
  /* height: 80px; */
`;

export const NavLinks = styled(LinkS)`
  display: flex;
  color: black;
  align-items: center;
  text-decoration: none;
  padding: 1rem;
  cursor: pointer;

  &:hover {
    border-bottom: 3px solid orange;
  }
`;
