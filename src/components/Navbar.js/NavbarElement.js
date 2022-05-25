import React from "react";
import styled from "styled-components";

import { GrClose, GrMenu } from "react-icons/gr";
import { useState } from "react";

export const NavbarElement = () => {
  const [click, setClick] = useState(false);

  const ChangClick = () => {
    setClick(!click);
    console.log(click);
  };
  return (
    <NavBar id="navbar">
      <Logo>
        <a href="/">
          <h1>JC</h1>
        </a>
      </Logo>
      <Menu click={click}>
        <ul>
          <li>
            <a href="#jirapon" onClick={() => ChangClick()}>
              HOME
            </a>
          </li>
          <li>
            <a href="#about" onClick={() => ChangClick()}>
              ABOUT
            </a>
          </li>
          <li>
            <a href="#education" onClick={() => ChangClick()}>
              EDUCATION
            </a>
          </li>
          <li>
            <a href="#perform" onClick={() => ChangClick()}>
              WORK
            </a>
          </li>
        </ul>
      </Menu>
      <MenuMoblid onClick={() => ChangClick()}>
        {click ? <GrClose className="icon"   /> : <GrMenu className="icon"  />}
      </MenuMoblid>
    </NavBar>
  );
};

const NavBar = styled.div`
  display: flex;
  -webkit-box-pack: justify;
  justify-content: space-between;
  -webkit-box-align: center;
  align-items: center;
  position: fixed;
  top: 0px;
  z-index: 11;
  padding: 0px 50px;
  width: 100%;
  height: 70px;
  background-color: rgba(10, 25, 47, 0.85);
  backdrop-filter: blur(10px);
  transition: var(--transition);
`;

const Logo = styled.div`
  border: 1px solid #a125;
  font-size: 30px;
  border-radius: 15px;
  a {
    color: white;
    text-decoration: none;
  }
`;

const Menu = styled.div`
  @media screen and (max-width: 768px) {
    width: 60%;
    height: 100vh;
    position: absolute;
    top: 70px;
    right: ${({ click }) => (click ? 0 : "-100%")};
    flex-direction: column;
    transition: 0.5s all ease-in;
    background-color: #ca4;

    /* ${({ click }) => (click ? 0 : "-100%")} */
  }
  & > ul {
    list-style: none;

    & li {
      display: inline-block;
      @media screen and (max-width: 768px) {
        padding: 25px;
      }
    }
    & li:hover {
      a {
        color: green;
      }
    }
    & a {
      padding: 15px;
      text-decoration: none;
      color: white;
      font-size: 1em;
    }
    @media screen and (max-width: 768px) {
      /* display:flex;
      align-items:center;
      justify-content:center;
      flex-direction: column;
      width: 60%;
      height: 100vh;
      position: absolute;
      top: 70px;
      right: 0%;
      transform: 0.5s all ease-in;
      background-color: red; */
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      height: 100vh;
    }
  }

  border: 1px solid #1a25;
`;

const MenuMoblid = styled.div`
  display: none;

  @media screen and (max-width: 768px) {
    display: flex;
    font-size:1.5rem;

    /* how to fix color *** in index.css .incon add path and stoke */
  }
`;

export default NavbarElement;
