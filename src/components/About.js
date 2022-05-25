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
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, vitae
            excepturi impedit nobis quasi fugit reprehenderit exercitationem
            quia veritatis ad.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
            porro mollitia, eligendi deserunt animi exercitationem?
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium
            magni odio illo, sint enim cumque aut harum perspiciatis optio
            excepturi.
          </p>
          <ul>
            <li>java</li>
            <li>react</li>
            <li>html</li>
            <li>javascript</li>
            <li>css</li>
            <li>worldpress</li>
          </ul>
        </Para>
        <Mypic>
          <img src="./images/me.jpg" alt="" />
        </Mypic>
      </Inner>
    </Contain>
  );
};

const Contain = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  border: 1px solid purple;
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
  border: 1px solid red;

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
  border: 1px solid #d488;
  @media (max-width: 768px) {
    display: block;
  }
`;
const Para = styled.div`
  display: block;
  border: 1px solid #45a4;
  padding-right: 10px;
  & p {
    margin: 0px 0px 15px;
  }
  & ul {
    display: grid;
    grid-template-columns: repeat(2, minmax(140px, 200px));
    border: 1px solid yellow;
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
  border: 1px solid #4ab;
  max-width: 300px;

  box-shadow: 0 10px 30px -15px var(--navy-shadow);
  transition: var(--transition);
  display: block;
  position: relative;

  width: 100%;
  border-radius: var(--border-radius);
  & img {
    max-width: 300px;
    object-fit: contain;
  }
  @media (max-width: 768px) {
    margin: 0 auto;
    padding: 25px 0px 0px 0px;
    
  }
`;

export default About;
