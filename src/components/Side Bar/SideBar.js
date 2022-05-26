import styled from "styled-components";
import { FaGithub, FaFacebook,FaInstagram } from "react-icons/fa";

function SideBar() {
  return (
    <Contain>
      <MainSide>
        <Side>
          <a href="/">jiraponchan@gmail.com</a>
        </Side>
      </MainSide>
      <MainSoc>
        <ul>
          <li>
            <a href="https://www.facebook.com/jiraponchan/" target='_blank'><FaFacebook size='1.5rem'/></a>
          </li>
          <li>
            <a href="https://www.instagram.com/05.11_pm_/" target="_blank"><FaInstagram size='1.5rem' /></a>
          </li>
          <li>
            <a href="/"><FaGithub size='1.5rem' /></a>
          </li>
        </ul>
      </MainSoc>
    </Contain>
  );
}

const Contain = styled.div`
  width: 40px;
  position: fixed;
  bottom: 0px;
  left: auto;
  right: 40px;
  z-index: 10;

`;

const MainSide = styled.div`
  display: flex;
  flex-direction: column;
  -webkit-box-align: center;
  align-items: center;
  position: relative;
  ::after {
    content: "";
    display: block;
    width: 1px;
    height: 90px;
    margin: 0px auto;
    background-color: white;
  }
  @media (max-width: 1080px){
    left: 20px;
    right: auto;
}

@media screen and (max-width: 768px) {
  display:none;
}
`;

const Side = styled.div`
  margin: 20px auto;
  padding: 10px;
  letter-spacing: 0.1em;
  writing-mode: vertical-rl;
  & > a {
    display: inline-block;
    text-decoration: none;
    text-decoration-skip-ink: auto;
    color: inherit;
    position: relative;
    transition: var(--transition);
  }
 
`;

const MainSoc = styled.div`
  width: 40px;
  position: fixed;
  bottom: 0px;
  left: 40px;
  right: auto;
  z-index: 10;
  ::after {
    content: "";
    display: block;
    width: 1px;
    height: 90px;
    margin: 0px auto;
    background-color: white;
  }
  &  ul {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0px;
    padding: 0px;
    list-style: none;

    & li a {
      display: list-item;
      padding: 10px;
    }
    & a {
      display: inline-block;
      text-decoration: none;
      text-decoration-skip-ink: auto;
      color: inherit;
      position: relative;
      transition: var(--transition);
    }
    & li:last-of-type {
      margin-bottom: 20px;
    }
    & a:hover{
      transform: scale(1.2);
      transition: 0.2s all ease-in;
      
      
    }
  }
  @media (max-width: 1080px){
    left: 20px;
    right: auto;
}
@media screen and (max-width: 768px) {
  display:none;
}
`;

export default SideBar;
