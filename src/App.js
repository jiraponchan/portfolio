import "./App.css";
import styled from "styled-components";
import Jirapon from "./components/Jirapon";
import SideBar from "./components/Side Bar/SideBar";
import About from "./components/About";
import NavbarElement from "./components/Navbar.js/NavbarElement";
import Education from "./components/Education";
import Performance from "./components/Performance";

function App() {
  return (
    <>
      <Contain>
      <NavbarElement />
        <WrapMain>
         
          {/* <Main> */}
            <Jirapon />
            <About />
            <Education />
            <Performance />
          {/* </Main> */}
        </WrapMain>
      </Contain>
      <SideBar />

    </>
  );
}

const Contain = styled.div`
  width: 100%;
  min-height: 100vh;

  border: 1px solid red;
`;

const WrapMain = styled.div`
  padding: 0 150px;
  margin: 0 154px;
  border: 1px solid yellow;

`;

// const Main = styled.div`
//   padding: 0 150px;

//   border:1px solid green;
// `;

export default App;
