import React from "react";
import styled from "styled-components";

export const NavbarElement = () => {
  return (
    <NavBar id="navbar">
      <Logo>
        <a href="/">
          <h1>JC</h1>
        </a>
      </Logo>
      <Menu>
        <ul>
          <li>
            <a href="#jirapon">Home</a>
          </li>
          <li>
            <a href="#about">About Me</a>
          </li>
          <li>
            <a href="#education">Education</a>
          </li>
          <li>
            <a href="#perform">Performance</a>
          </li>
        </ul>
      </Menu>
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
  & ul {
    list-style: none;

    & li {
      display: inline-block;
    }
    & li:hover {
      a {
        color: red;
      }
    }
    & a {
      padding: 15px;
      text-decoration: none;
      color: white;
      font-size: 1em;
    }
  }
  @media screen and (min-width: 1920px) {
  }
  border: 1px solid #1a25;
`;

export default NavbarElement;
