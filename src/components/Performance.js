import React from "react";
import styled from "styled-components";

export const Performance = () => {
  return (
    <Container id="perform">
      <Heading>
        <h2>Performance</h2>
      </Heading>
      <Inner>
        <ul>
          <li>
            <Details>
              <p>Lorem ipsum dolor sit amet.</p>
              <h3>
                <a href="/">Lorem, ipsum dolor.</a>
              </h3>
              <div>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Aliquam, eaque doloribus a modi mollitia omnis ex at
                  distinctio, alias reiciendis saepe quidem nihil. Obcaecati,
                  sed!
                </p>
              </div>
              <ul>
                <li>Vs code</li>
                <li>Sublime Text</li>
                <li>Atom</li>
                <li>Hyper</li>
              </ul>
              <Socail>
                <a href="/">Grid hub</a>
                <a href="/">Webside</a>
              </Socail>
            </Details>
            <Img>
              <img src="./images/pic.jpg" alt="pic" />
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

  border: 1px solid #b22a;
  @media (max-width: 768px) {
    padding: 80px 0px;
  }
`;

const Heading = styled.div`
  display: flex;
  align-items: center;
  margin: 10px 0px 40px;
  width: 100%;
  white-space: nowrap;
  border: 1px solid #52a;

  & h2 {
    font-size: 2.25em;
  }

  ::before {
    font-size: 2.25em;
    content: "03";
    margin: 0px 20px 0px 0px;
  }

  ::after {
    content: "";
    width: 250px;
    margin: 0px 0px 0px 20px;
    border: 1px solid white;
  }
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
  grid-column: 7 / -1;
  text-align: right;
  z-index: 2;

  & p > {
    margin: 10px 0px;
    color: var(--green);
    font-family: var(--font-mono);
    font-size: var(--fz-xs);
    font-weight: 400;
  }
  & > h3 {
    color: var(--lightest-slate);
    font-size: clamp(24px, 5vw, 28px);
    margin: 0px 0px 20px;
  }

  & div {
    box-shadow: 0 10px 30px -15px var(--navy-shadow);
    transition: var(--transition);
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
      padding:0;
    }
  }
  & ul {
    display: flex;
    justify-content: flex-end;
    flex-wrap: wrap;
    position: relative;
    z-index: 2;
    margin: 25px 0px 10px;
    padding: 0px;
    list-style: none;
    & > li {
      margin: 0px 0px 5px 20px;
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
  justify-content: flex-end;
  margin-left: 0px;
  margin-right: -10px;
  & > a {
    display: flex;
    -webkit-box-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    align-items: center;
    padding: 10px;
  }
  @media (max-width: 768px) {
    justify-content: flex-start;
    
  }
`;

const Img = styled.div`
  border: 1px solid yellow;
  box-shadow: 0 10px 30px -15px var(--navy-shadow);
  transition: var(--transition);
  grid-area: 1 / 6 / -1 / -1;
  position: relative;
  z-index: 1;
  grid-column: 1 / 8;
  @media (max-width: 768px) {
    
    opacity: 0.25;
    grid-column: 1 / -1;
    filter: grayscale(100%) contrast(1) brightness(50%);
  }

  & > img {
    width: 100%;
    height: 100%;
    background-color: var(--green);
    border-radius: var(--border-radius);
    vertical-align: middle;
    position: relative;
    z-index: 1;
    opacity: 0.25;
    filter: grayscale(50%) contrast(1) brightness(70%);
    
    
  }
  & > img:hover{
    opacity: 1;  
    filter:none;
   transition: 0.25s all ease-in;
   transform: scale(1.02);

   
  }
  & > img:not(hover){
    
   transition: 0.25s all ease-out;
   
   
  }
`;

export default Performance;
