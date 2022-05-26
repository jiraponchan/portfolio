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
          <li>
            <a href="#intern" onClick={() => ChangClick()}>
              INTERNSHIP
            </a>
          </li>
        </ul>
      </Menu>
      <MenuMoblid onClick={() => ChangClick()}>
        {click ? <GrClose className="icon" /> : <GrMenu className="icon" />}
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
  /* background-color: rgba(10, 25, 47, 0.85); */
  background-color: rgb(12, 10, 29);
  backdrop-filter: blur(10px);
  box-shadow: 0 10px 30px -10px rgba(10, 25, 47, 0.85);
  transition: var(--transition);
`;

const Logo = styled.div`
  /* border: 1px solid #a125; */
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
    right: ${({ click }) => (click ? 0 : "-110%")};
    flex-direction: column;
    transition: 0.5s all ease-in;
    background-color: rgb(12, 10, 29);
    backdrop-filter: blur(30px);
    box-shadow: 0 10px 30px -10px rgba(10, 25, 47, 0.85);

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
    & a:hover {
      text-shadow: 0 0 10px rgb(192 219 255 / 75%),
        0 0 100px rgb(65 120 255 / 54%);
      transition: var(--transition);
    }
    & a {
      padding: 15px;
      text-decoration: none;
      color: white;
      font-size: 1em;
      text-shadow: rgba(0,255,200,0.89) 0px 0px 88px;
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
`;

const MenuMoblid = styled.div`
  display: none;

  @media screen and (max-width: 768px) {
    display: flex;
    font-size: 1.5rem;

    /* how to fix color *** in index.css .incon add path and stoke */
  }
`;

export default NavbarElement;
