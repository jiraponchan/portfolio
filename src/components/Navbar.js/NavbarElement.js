import React from "react";
import styled from "styled-components";


export const NavbarElement = () => {
  return (
   
      <NavBar>
        <Logo>
          <a href="/">
          <img src="./images/Logo.png" alt="logo" />
          </a>
        </Logo>
        <Menu>
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/">About Me</a>
            </li>
            <li>
              <a href="/">Education</a>
            </li>
            <li>
              <a href="/">Contact</a>
            </li>
          </ul>
        </Menu>
      </NavBar>
    
  );
};



const NavBar = styled.div`

  width: 100%;
  height: 70px;
  display: flex;
  top:0px;
  position:fixed;
  justify-content: space-between;
  align-items: center;
  padding: 0 60px;

  border: 1px solid #54a;


`;

const Logo = styled.div`
  width: 50px;
  height: 50px;
  border: 1px solid #a125;
  background-color: #45a;
  border-radius:15px;
  
 
    & img {
      width:50px;
      height:50px;
    }
`;

const Menu = styled.div`
  & ul {
    list-style: none;
    
    & li {
      display: inline-block;
      
      
    }
    & a {
      padding:10px;
      text-decoration: none;
      color: white;
      font-size: 1em;
      
    }
  }

 
  border: 1px solid #1a25;
`;

export default NavbarElement;
