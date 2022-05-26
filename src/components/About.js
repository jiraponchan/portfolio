import React from "react";
import styled from "styled-components";

const About = () => {


  return (
    <Contain id="about">
      <Heading>
        <h2>About Me</h2>
      </Heading>
      <Inner>
        <Para>
          <p>Hello! My name is Jirapon Chantamna</p>
          <p>
            I enjoy creating things that live on
            the internet. My interest in web development started back in 2021
            when I decided to try editing custom Free themes — turns out
            hacking together a custom reblog button taught me a lot about HTML {'&'}
            CSS!
          </p>
          <p>
            Life is a circle of Happiness, Sadness, Hard times , Good times. If
            you are having hard times have faith that good times are on the way
          </p>
          <ul>
            <li>JAVASCRIPT</li>
            <li>REACT</li>
            <li>VUE</li>
            <li>HTML</li>
            <li>CSS</li>
            <li>WORDPRESS</li>
          </ul>
        </Para>
        <Mypic>
          <img src="./images/me.jpg" alt="" />
        </Mypic>
      </Inner>
      <Blop></Blop>
    </Contain>
  );
};

const Contain = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  margin: 0px auto;
  padding: 100px 0px;
  max-width: 800px;
  min-height: 100vh;
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
    content: "01";
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
  display: grid;
  grid-template-columns: 3fr 2fr;
  z-index: 3;

  @media (max-width: 768px) {
    display: block;
  }
`;
const Para = styled.div`
  display: block;

  padding-right: 10px;
  & p {
    margin: 0px 0px 15px;
  }
  & ul {
    display: grid;
    grid-template-columns: repeat(2, minmax(140px, 200px));

    gap: 0px 10px;
    padding: 0px;
    margin: 20px 0px 0px;
    overflow: hidden;
    list-style: none;
    & li {
      position: relative;
      margin-bottom: 10px;
      padding-left: 20px;

      ::before {
        content: "▹";
        position: absolute;
        left: 0px;
        line-height: 12px;
      }
    }
  }
`;
const Mypic = styled.div`
  max-width: 300px;

  box-shadow: 0 10px 30px -15px var(--navy-shadow);
  transition: var(--transition);
  display: block;
  position: relative;

  width: 100%;
  border-radius: 10px;
  & img {
    max-width: 300px;
    object-fit: contain;
  }
  & > img {
    width: 100%;
    height: 100%;

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
  @media (max-width: 768px) {
    margin: 0 auto;
    padding: 25px 0px 0px 0px;
  }
`;

const Blop = styled.div`
  position: absolute;
  z-index: 1;
  filter: blur(25px);
  margin: -600px 0px 100px -700px;
  width: 700px;
  height: 700px;
  background-size: cover;
  background-repeat: no-repeat;
  background-image: url("data:image/svg+xml;utf8, %3Csvg width=%22100%25%22 height=%22100%25%22 viewBox=%220 0 1000 1000%22 xmlns=%22http:%2F%2Fwww.w3.org%2F2000%2Fsvg%22 %3E %3Cdefs%3E %3Cfilter id=%22grain%22 x=%22-50vw%22 y=%22-50vh%22 width=%22100vw%22 height=%22100vh%22%3E %3CfeFlood flood-color=%22%23ffffff%22 result=%22neutral-gray%22 %2F%3E %3CfeTurbulence in=%22neutral-gray%22 type=%22fractalNoise%22 baseFrequency=%222.5%22 numOctaves=%22100%22 stitchTiles=%22stitch%22 result=%22noise%22 %2F%3E %3CfeColorMatrix in=%22noise%22 type=%22saturate%22 values=%220%22 result=%22destaturatedNoise%22 %3E%3C%2FfeColorMatrix%3E %3CfeComponentTransfer in=%22desaturatedNoise%22 result=%22theNoise%22%3E %3CfeFuncA type=%22table%22 tableValues=%220 0 0.35 0%22%3E%3C%2FfeFuncA%3E %3C%2FfeComponentTransfer%3E %3CfeBlend in=%22SourceGraphic%22 in2=%22theNoise%22 mode=%22soft-light%22 result=%22noisy-image%22 %2F%3E %3C%2Ffilter%3E %3ClinearGradient id=%22linearGradientId%22 gradientTransform=%22rotate(105 0.5 0.5)%22%3E %3Cstop offset=%220%25%22 stop-color=%22%23FFE53B%22 %2F%3E %3Cstop offset=%22100%25%22 stop-color=%22%23FF2525%22 %2F%3E %3C%2FlinearGradient%3E %3CclipPath id=%22shape%22%3E %3Cpath fill=%22currentColor%22 d=%22M901.5%2C654.5Q868%2C809%2C726.5%2C894Q585%2C979%2C433%2C929.5Q281%2C880%2C194.5%2C761.5Q108%2C643%2C79.5%2C490Q51%2C337%2C168.5%2C233Q286%2C129%2C429.5%2C107.5Q573%2C86%2C698.5%2C157Q824%2C228%2C879.5%2C364Q935%2C500%2C901.5%2C654.5Z%22%3E%3C%2Fpath%3E %3C%2FclipPath%3E %3C%2Fdefs%3E %3Cg filter=%22url(%23grain)%22 clip-path=%22url(%23shape)%22%3E %3Cpath fill=%22url(%23linearGradientId)%22 d=%22M901.5%2C654.5Q868%2C809%2C726.5%2C894Q585%2C979%2C433%2C929.5Q281%2C880%2C194.5%2C761.5Q108%2C643%2C79.5%2C490Q51%2C337%2C168.5%2C233Q286%2C129%2C429.5%2C107.5Q573%2C86%2C698.5%2C157Q824%2C228%2C879.5%2C364Q935%2C500%2C901.5%2C654.5Z%22 %2F%3E %3C%2Fg%3E %3C%2Fsvg%3E");
`;

export default About;
