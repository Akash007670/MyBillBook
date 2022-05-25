import styled from "styled-components";
import { Link as LinkR } from "react-router-dom";
import { Link as LinkS } from "react-router-dom";

export const Nav = styled.nav`
  display: flex;
  /* border: 2px solid red; */
  max-width: 1600px;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  font-size: 1rem;
  padding: 0 4rem;
  position: sticky;
  top: 0;
  z-index: 10;
  height: 10vh;

  @media screen and (max-width: 768px) {
    transition: 0.8s all ease;
    padding: 0 2rem;
  }
`;

export const NavLogo = styled(LinkR)`
  cursor: pointer;
  align-items: center;
  justify-content: center;
  text-align: center;
  /* border: 2px solid red; */
`;

export const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 50%;
    right: 10px;
    transform: translate(-50%, -50%);
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
  gap: 10px;
  /* border: 2px solid green; */

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavItem = styled.li`
  display: flex;
  /* border: 2px solid blue; */
  position: relative;
  font-weight: 700;
  /* height: 80px; */
  &:hover ::after {
    content: "";
    position: absolute;
    height: 2px;
    bottom: 0;
    width: 85%;
    background-color: orange;
  }
`;

export const NavLinks = styled(LinkS)`
  display: flex;
  color: black;
  align-items: center;
  text-decoration: none;
  padding: 10px;
  cursor: pointer;
`;
