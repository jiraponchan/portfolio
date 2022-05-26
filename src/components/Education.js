import React from "react";
import styled from "styled-components";

export const Education = () => {
  return (
    <Container id="education">
      <Heading>
        <h2>Education</h2>
      </Heading>
      <Inner>
        <School>
          <button>
            <span>2000-2014</span>
          </button>
          <button>
            <span>2015-2019 </span>
          </button>
        </School>
        <Detail>
          <Panel>
            <ul>
              <li>
                Mathenatics-Science Program <br />
                Bueng kan school , Bueng kan
              </li>
              <li>
                Computer Science <br />
                Udon Thani Rajabhat University , Udon thani
              </li>
            </ul>
          </Panel>
        </Detail>
      </Inner>
      <Blop></Blop>
   
    </Container>
  );
};

const Container = styled.div`
  max-width: 700px;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  justify-content: center;
  margin: 0 auto;
  padding: 100px 0px;
`;

const Heading = styled.div`
  display: flex;
  align-items: center;
  margin: 10px 0px 40px;
  width: 100%;
  white-space: nowrap;
  z-index: 3;

  & h2 {
    font-size: 2.25em;
  }

  ::before {
    font-size: 2.25em;
    content: "02";
    margin: 0px 20px 0px 0px;
  }

  ::after {
    content: "";
    width: 250px;
    margin: 0px 0px 0px 20px;
    border: 1px solid white;
  }
`;

const Inner = styled.div`
  width: 100%;
  height: 30vh;
  position: relative;
  z-index: 5;

  align-items: center;
  display: flex;
  /* From https://css.glass */
  background: rgba(255, 255, 255, 0.1);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(6px);
  -webkit-backdrop-filter: blur(6px);
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.18);
  @media screen and (max-width: 768px) {
    display: flex;
    font-size: clamp(5px, 5vw, 16px);
  }

 
`;

const School = styled.div`
  padding: 0px;
  margin: 0px;
  z-index: 3;
  & button {
    width: 100%;
    height: 42px;
    align-items: center;
    background-color: #1a1a1a;
    text-align: right;
    padding: 0px 20px 2px;
    border: 0px;
    background-color: transparent;
    /* border-left: 2px solid; */
  }
  & span {
    font-size: 1rem;
    color: white;
  }
`;
const Detail = styled.div`
  /* border: 1px solid #1ba; */
  
  z-index: 3;
`;
const Panel = styled.div`
  /* border: 1px solid #1b2a; */
  padding-top: 10px;
  padding-left: 20px;
  z-index: 3;
`;

const Blop = styled.div`
  position: absolute;
  margin: 50px 103px 0px 90px;
  width: 250px;
  height: 250px;
  background-size: cover;
  background-repeat: no-repeat;
  background-image: url("data:image/svg+xml;utf8, %3Csvg width=%22100%25%22 height=%22100%25%22 viewBox=%220 0 1000 1000%22 xmlns=%22http:%2F%2Fwww.w3.org%2F2000%2Fsvg%22 %3E %3Cdefs%3E %3Cfilter id=%22grain%22 x=%22-50vw%22 y=%22-50vh%22 width=%22100vw%22 height=%22100vh%22%3E %3CfeFlood flood-color=%22%23ffffff%22 result=%22neutral-gray%22 %2F%3E %3CfeTurbulence in=%22neutral-gray%22 type=%22fractalNoise%22 baseFrequency=%222.5%22 numOctaves=%22100%22 stitchTiles=%22stitch%22 result=%22noise%22 %2F%3E %3CfeColorMatrix in=%22noise%22 type=%22saturate%22 values=%220%22 result=%22destaturatedNoise%22 %3E%3C%2FfeColorMatrix%3E %3CfeComponentTransfer in=%22desaturatedNoise%22 result=%22theNoise%22%3E %3CfeFuncA type=%22table%22 tableValues=%220 0 0.35 0%22%3E%3C%2FfeFuncA%3E %3C%2FfeComponentTransfer%3E %3CfeBlend in=%22SourceGraphic%22 in2=%22theNoise%22 mode=%22soft-light%22 result=%22noisy-image%22 %2F%3E %3C%2Ffilter%3E %3ClinearGradient id=%22linearGradientId%22 gradientTransform=%22rotate(105 0.5 0.5)%22%3E %3Cstop offset=%220%25%22 stop-color=%22%23FFE53B%22 %2F%3E %3Cstop offset=%2250%25%22 stop-color=%22%23FF2525%22 %2F%3E %3Cstop offset=%22100%25%22 stop-color=%22%23ffac3b%22 %2F%3E %3C%2FlinearGradient%3E %3CclipPath id=%22shape%22%3E %3Cpath fill=%22currentColor%22 d=%22M805.5%2C602.5Q782%2C705%2C688%2C747.5Q594%2C790%2C484.5%2C837Q375%2C884%2C245.5%2C831.5Q116%2C779%2C95%2C639.5Q74%2C500%2C131.5%2C387Q189%2C274%2C296%2C238.5Q403%2C203%2C507.5%2C179Q612%2C155%2C690%2C230Q768%2C305%2C798.5%2C402.5Q829%2C500%2C805.5%2C602.5Z%22%3E%3C%2Fpath%3E %3C%2FclipPath%3E %3C%2Fdefs%3E %3Cg filter=%22url(%23grain)%22 clip-path=%22url(%23shape)%22%3E %3Cpath fill=%22url(%23linearGradientId)%22 d=%22M805.5%2C602.5Q782%2C705%2C688%2C747.5Q594%2C790%2C484.5%2C837Q375%2C884%2C245.5%2C831.5Q116%2C779%2C95%2C639.5Q74%2C500%2C131.5%2C387Q189%2C274%2C296%2C238.5Q403%2C203%2C507.5%2C179Q612%2C155%2C690%2C230Q768%2C305%2C798.5%2C402.5Q829%2C500%2C805.5%2C602.5Z%22 %2F%3E %3C%2Fg%3E %3C%2Fsvg%3E");

  animation: move 10s ease-in-out infinite;
  transform-origin: 50% 50%;

  @keyframes move {
    0% {
      transform: scale(1) translate(10px, -30px);
    }
    38% {
      transform: scale(0.8, 1) translate(18vw, 12vh) rotate(160deg);
    }
    40% {
      transform: scale(0.8, 1) translate(18vw, 12vh) rotate(160deg);
    }
    78% {
      transform: scale(1.3) translate(10vw, 5vh) rotate(-20deg);
    }
    80% {
      transform: scale(1.3) translate(10vw, 5vh) rotate(-20deg);
    }
    100% {
      transform: scale(1) translate(10px, -30px);
    }
  }
`;


export default Education;
