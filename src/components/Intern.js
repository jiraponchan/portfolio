import React from "react";
import styled from "styled-components";

export const Performance = () => {
  return (
    <Container id="intern">
      <Heading>
        <h2>Internship</h2>
      </Heading>
      <Inner>
        <ul>
          <li>
            <Details>
              <p>2018, May - June</p>
              <h3>
                <a href="/">Web Developer</a>
              </h3>
              <div>
                <p>
                  We build websites and applications using the latest
                  technologies that work hard, achieve results, and generate a
                  return on investment.
                </p>
              </div>
              <ul>
                <li>Wordpress</li>
                <li>Photoshop</li>
                <li>Illustrator</li>
              </ul>
              <Socail>
                <a href="https://mountain.co.th/" target="_bank">
                  mountain studio (Thailand) Company
                </a>
              </Socail>
            </Details>
            <Img>
              <img src="./images/mount.jpg" alt="pic" />
            </Img>
          </li>
        </ul>
      </Inner>
     
    </Container>
  );
};

const Container = styled.div`
  margin: 0 auto;
  padding: 100px 0px;
  max-width: 1000px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: 100vh;

  @media (max-width: 768px) {
    padding: 30px 0px;
  }
`;

const Heading = styled.div`
  display: flex;
  align-items: center;
  margin: 10px 0px 40px;
  width: 100%;
  white-space: nowrap;

  & h2 {
    font-size: 2.25em;
    text-align: right;

    @media screen and (max-width: 768px) {
      text-align: left;
    }
  }
  ::before {
    font-size: 2.25em;
    content: "04";
    margin: 0px 20px 0px 0px;
  }

  /* ::after {
    font-size: 2.25em;
    content: "04";
    margin: 0px 20px 0px 0px;
  } */

  /* ::before {
    content: "";
    width: 700px;
    margin: 0px 25px 0px 200px;
    border: 1px solid white;
  } */
`;
// ! ------------------------------------------------------------------------------
const Inner = styled.div`
  padding: 0px;
  margin: 0px;
  & > ul {
    list-style: none;
    padding: 0px;
    margin: 0px;
    & > li {
      position: relative;
      display: grid;
      gap: 10px;
      grid-template-columns: repeat(12, 1fr);
      -webkit-box-align: center;
      align-items: center;
    }
  }
`;

const Details = styled.div`
  position: relative;
  grid-area: 1 / 1 / -1 / 7;
  /* grid-column: 7 / -1; detail */
  text-align: left;
  z-index: 2;

  & p > {
    margin: 10px 0px;
    color: var(--green);
    font-family: var(--font-mono);
    font-size: var(--fz-xs);
    font-weight: 400;
  }
  & > h3 {
    font-size: clamp(24px, 5vw, 28px);
    margin: 5px 0px 20px;
    & > a {
      text-decoration: none;
      color: white;
      text-shadow: rgba(255, 255, 255, 1) 0px 0px 17px;
    }
  }

  & div {
    background: rgba(255, 255, 255, 0.25);
    box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
    backdrop-filter: blur(16px);
    -webkit-backdrop-filter: blur(16px);
    border-radius: 10px;
    border: 1px solid rgba(255, 255, 255, 0.18);
    position: relative;
    z-index: 2;
    padding: 25px;
    border-radius: var(--border-radius);
    background-color: #1125;
    color: wheat;
    font-size: var(--fz-lg);
    & > p {
      margin: 0px;
    }
    @media (max-width: 768px) {
      padding: 0;
    }
  }
  & ul {
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;
    position: relative;
    z-index: 2;
    margin: 25px 0px 10px;
    padding: 0px;
    list-style: none;

    & > li {
      margin: 0px 20px 5px 0px;
      white-space: nowrap;
      @media (max-width: 768px) {
        margin: 0px 0px 5px 10px;
        justify-content: flex-start;
      }
    }
    @media (max-width: 768px) {
      justify-content: flex-start;
    }
  }
  @media (max-width: 768px) {
    grid-column: 1 / -1;
    padding: 40px 40px 30px;
    text-align: left;
  }
  @media (max-width: 480px) {
    padding: 0px;
    justify-content: flex-start;
  }
`;

const Socail = styled.section`
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  position: relative;
  margin-top: 10px;
  margin-left: -10px;
  color: var(--lightest-slate);
  -webkit-box-pack: end;
  justify-content: flex-start;
  margin-left: 0px;
  margin-right: -10px;

  & > a {
    text-decoration: none;
    font-size: 1.2rem;
    color: #fff;
    text-shadow: rgba(255, 229, 59, 1) 0px 0px 17px;
    display: flex;
    -webkit-box-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    align-items: center;
    padding: 10px 0px 10px 0px;
  }
  @media (max-width: 768px) {
    justify-content: flex-start;
  }
`;

const Img = styled.div`
  box-shadow: 0 10px 30px -15px var(--navy-shadow);
  transition: var(--transition);
  grid-area: 1 / 6 / -1 / -1;
  position: relative;
  z-index: 1;
  grid-column: 6 / -1;
  @media (max-width: 768px) {
    opacity: 0.9;
    grid-column: 1 / -1;
    filter: grayscale(100%) contrast(1) brightness(50%);
  }

  & > img {
    width: 100%;
    height: 100%;
    background-color: var(--green);
    border-radius: 10px;
    vertical-align: middle;
    position: relative;
    z-index: 1;
    opacity: 0.25;
    filter: grayscale(50%) contrast(1) brightness(70%);
  }
  & > img:hover {
    opacity: 1;
    filter: none;
    transition: 0.25s all ease-in;
    transform: scale(1.02);
  }
  & > img:not(hover) {
    transition: 0.25s all ease-out;
  }
`;

// const Blop = styled.div`
//   position: absolute;

//   width: 250px;
//   height: 250px;
//   filter: blur(40px);
//   display:flex;

//   width: 500px;
//   height: 500px;
//   background-size: cover;
//   background-repeat: no-repeat;
//   background-image: url("data:image/svg+xml;utf8, %3Csvg width=%22100%25%22 height=%22100%25%22 viewBox=%220 0 1000 1000%22 xmlns=%22http:%2F%2Fwww.w3.org%2F2000%2Fsvg%22 %3E %3Cdefs%3E %3Cfilter id=%22grain%22 x=%22-50vw%22 y=%22-50vh%22 width=%22100vw%22 height=%22100vh%22%3E %3CfeFlood flood-color=%22%23ffffff%22 result=%22neutral-gray%22 %2F%3E %3CfeTurbulence in=%22neutral-gray%22 type=%22fractalNoise%22 baseFrequency=%222.5%22 numOctaves=%22100%22 stitchTiles=%22stitch%22 result=%22noise%22 %2F%3E %3CfeColorMatrix in=%22noise%22 type=%22saturate%22 values=%220%22 result=%22destaturatedNoise%22 %3E%3C%2FfeColorMatrix%3E %3CfeComponentTransfer in=%22desaturatedNoise%22 result=%22theNoise%22%3E %3CfeFuncA type=%22table%22 tableValues=%220 0 0.4 0%22%3E%3C%2FfeFuncA%3E %3C%2FfeComponentTransfer%3E %3CfeBlend in=%22SourceGraphic%22 in2=%22theNoise%22 mode=%22soft-light%22 result=%22noisy-image%22 %2F%3E %3C%2Ffilter%3E %3ClinearGradient id=%22linearGradientId%22 gradientTransform=%22rotate(225 0.5 0.5)%22%3E %3Cstop offset=%220%25%22 stop-color=%22%23FFE53B%22 %2F%3E %3Cstop offset=%22100%25%22 stop-color=%22%23FF2525%22 %2F%3E %3C%2FlinearGradient%3E %3CclipPath id=%22shape%22%3E %3Cpath fill=%22currentColor%22 d=%22M715%2C579.5Q719%2C659%2C671%2C768Q623%2C877%2C515.5%2C829.5Q408%2C782%2C348%2C718Q288%2C654%2C175.5%2C577Q63%2C500%2C105%2C371.5Q147%2C243%2C246.5%2C135Q346%2C27%2C497%2C35.5Q648%2C44%2C682.5%2C193Q717%2C342%2C714%2C421Q711%2C500%2C715%2C579.5Z%22%3E%3C%2Fpath%3E %3C%2FclipPath%3E %3C%2Fdefs%3E %3Cg filter=%22url(%23grain)%22 clip-path=%22url(%23shape)%22%3E %3Cpath fill=%22url(%23linearGradientId)%22 d=%22M715%2C579.5Q719%2C659%2C671%2C768Q623%2C877%2C515.5%2C829.5Q408%2C782%2C348%2C718Q288%2C654%2C175.5%2C577Q63%2C500%2C105%2C371.5Q147%2C243%2C246.5%2C135Q346%2C27%2C497%2C35.5Q648%2C44%2C682.5%2C193Q717%2C342%2C714%2C421Q711%2C500%2C715%2C579.5Z%22 %2F%3E %3C%2Fg%3E %3C%2Fsvg%3E");
// `;

export default Performance;
