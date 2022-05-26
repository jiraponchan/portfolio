import styled from "styled-components";

function Jirapon() {
  return (
    <Contain id="jirapon">
      <h1>Hi, my name is </h1>
      <h2>Jirapon Chan</h2>
      <h3>Yesterday does not define you</h3>
      <p>
        I am a newbie with a desire to explore new experiences. i'm ready to
        learn develop myself So i'm looking organization that can use my
        knowledge and ability to benefit of the organization.
      </p>
      <Blop></Blop>
    </Contain>
  );
}

const Contain = styled.section`
position:relative;
z-index:5;
  display: flex;
  -webkit-box-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  flex-direction: column;
  align-items: flex-start;
  min-height: 100vh;
  padding: 0px;

  margin: 0px auto;
  padding: 100px 0px;
  max-width: 1000px;



  & > h2 {
    margin: 5px;
    text-shadow: rgba(255, 255, 255, 0.89) 0px 0px 31px;
    font-size: clamp(35px, 8vw, 80px);
  }
  & h1 {
    font-size: 1em;
    font-size: clamp(14px, 5vw, 16px);
  }
  & p {
    max-width: 540px;
    padding-top: 20px;
  }
  & h3 {
    font-size: 1em;
    font-size: clamp(30px, 5vw, 50px);
  }

  
`;

const Blop = styled.div`
  position:absolute;
  z-index:-1;
  filter: blur(30px);
margin: -500px 0px 300px 100px;
  width:1000px;
  height:1000px;
  background-size: cover;
  background-repeat: no-repeat;
  background-image: url("data:image/svg+xml;utf8, %3Csvg width=%22100%25%22 height=%22100%25%22 viewBox=%220 0 1000 1000%22 xmlns=%22http:%2F%2Fwww.w3.org%2F2000%2Fsvg%22 %3E %3Cdefs%3E %3Cfilter id=%22grain%22 x=%22-50vw%22 y=%22-50vh%22 width=%22100vw%22 height=%22100vh%22%3E %3CfeFlood flood-color=%22%23ffffff%22 result=%22neutral-gray%22 %2F%3E %3CfeTurbulence in=%22neutral-gray%22 type=%22fractalNoise%22 baseFrequency=%222.5%22 numOctaves=%22100%22 stitchTiles=%22stitch%22 result=%22noise%22 %2F%3E %3CfeColorMatrix in=%22noise%22 type=%22saturate%22 values=%220%22 result=%22destaturatedNoise%22 %3E%3C%2FfeColorMatrix%3E %3CfeComponentTransfer in=%22desaturatedNoise%22 result=%22theNoise%22%3E %3CfeFuncA type=%22table%22 tableValues=%220 0 0.5 0%22%3E%3C%2FfeFuncA%3E %3C%2FfeComponentTransfer%3E %3CfeBlend in=%22SourceGraphic%22 in2=%22theNoise%22 mode=%22soft-light%22 result=%22noisy-image%22 %2F%3E %3C%2Ffilter%3E %3CradialGradient id=%22radialGradientId%22 r=%22100%25%22 cx=%22100%25%22 cy=%2282%25%22 %3E %3Cstop offset=%220%25%22 stop-color=%22%23FFE53B%22 %2F%3E %3Cstop offset=%22100%25%22 stop-color=%22%23ff2525%22 %2F%3E %3C%2FradialGradient%3E %3CclipPath id=%22shape%22%3E %3Cpath fill=%22currentColor%22 d=%22M835%2C689Q802%2C878%2C606%2C885.5Q410%2C893%2C286.5%2C777.5Q163%2C662%2C128%2C483Q93%2C304%2C244.5%2C173.5Q396%2C43%2C576.5%2C110.5Q757%2C178%2C812.5%2C339Q868%2C500%2C835%2C689Z%22%3E%3C%2Fpath%3E %3C%2FclipPath%3E %3C%2Fdefs%3E %3Cg filter=%22url(%23grain)%22 clip-path=%22url(%23shape)%22%3E %3Cpath fill=%22url(%23radialGradientId)%22 d=%22M835%2C689Q802%2C878%2C606%2C885.5Q410%2C893%2C286.5%2C777.5Q163%2C662%2C128%2C483Q93%2C304%2C244.5%2C173.5Q396%2C43%2C576.5%2C110.5Q757%2C178%2C812.5%2C339Q868%2C500%2C835%2C689Z%22 %2F%3E %3C%2Fg%3E %3C%2Fsvg%3E");



`

export default Jirapon;
