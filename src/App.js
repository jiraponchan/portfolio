import "./App.css";
import styled from "styled-components";
import Jirapon from "./components/Jirapon";
import SideBar from "./components/Side Bar/SideBar";
import About from "./components/About";
import NavbarElement from "./components/Navbar.js/NavbarElement";
import Education from "./components/Education";
import Performance from "./components/Performance";
import Intern from "./components/Intern";

import { createGlobalStyle } from "styled-components";

function App() {
  return (
    <>
      <GlobalStyle />
      <Contain>
        <NavbarElement />
        <WrapMain>
          {/* <Main> */}
          <Jirapon />
          <About />
          <Education />
          <Performance />
          <Intern />
          {/* </Main> */}
        </WrapMain>
      </Contain>
      <SideBar />
    </>
  );
}

const Contain = styled.div`
  /* width: 100%;
  min-height: 100vh;

  border: 1px solid red; */
`;

const WrapMain = styled.div`
  padding: 0 150px;
  margin: 0 154px;
  width: 100%;
  max-width: 1600px;
  min-height: 100vh;
  margin: 0 auto;


  @media screen and (max-width: 1080px) {
    padding: 0px 100px;
  }
  @media screen and (max-width: 768px) {
    padding: 0px 50px;
  }
  @media screen and (max-width: 480px) {
    padding: 0px 25px;
  }
`;

const GlobalStyle = styled.div`
  --dark-navy: #020c1b;
  --navy: #0a192f;
  --light-navy: #112240;
  --lightest-navy: #233554;
  --navy-shadow: rgba(2, 12, 27, 0.7);
  --dark-slate: #495670;
  --slate: #8892b0;
  --light-slate: #a8b2d1;
  --lightest-slate: #ccd6f6;
  --white: #e6f1ff;
  --green: #64ffda;
  --green-tint: rgba(100, 255, 218, 0.1);
  --pink: #f57dff;
  --blue: #57cbff;
  --font-sans: "Calibre", "Inter", "San Francisco", "SF Pro Text", -apple-system,
    system-ui, sans-serif;
  --font-mono: "SF Mono", "Fira Code", "Fira Mono", "Roboto Mono", monospace;
  --fz-xxs: 12px;
  --fz-xs: 13px;
  --fz-sm: 14px;
  --fz-md: 16px;
  --fz-lg: 18px;
  --fz-xl: 20px;
  --fz-xxl: 22px;
  --fz-heading: 32px;
  --border-radius: 4px;
  --nav-height: 70px;
  --nav-scroll-height: 70px;
  --tab-height: 42px;
  --tab-width: 120px;
  --easing: cubic-bezier(0.645, 0.045, 0.355, 1);
  --transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);
  --hamburger-width: 30px;
  --ham-before: top 0.1s ease-in 0.25s, opacity 0.1s ease-in;
  --ham-before-active: top 0.1s ease-out, opacity 0.1s ease-out 0.12s;
  --ham-after: bottom 0.1s ease-in 0.25s,
    transform 0.22s cubic-bezier(0.55, 0.055, 0.675, 0.19);
  --ham-after-active: bottom 0.1s ease-out,
    transform 0.22s cubic-bezier(0.215, 0.61, 0.355, 1) 0.12s;
`;

// const Main = styled.div`
//   padding: 0 150px;

//   border:1px solid green;
// `;

export default App;
