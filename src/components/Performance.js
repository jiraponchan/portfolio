import React from "react";
import styled from "styled-components";

export const Performance = () => {
  return (
    <Container>
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
              <a href="/">รูป</a>
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

  border: 1px solid #b22a;
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
    }
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
`;

const Img = styled.div`
  border: 1px solid yellow;
  box-shadow: 0 10px 30px -15px var(--navy-shadow);
  transition: var(--transition);
  grid-area: 1 / 6 / -1 / -1;
  position: relative;
  z-index: 1;
  grid-column: 1 / 8;
  & > a {
    width: 100%;
    height: 100%;
    background-color: var(--green);
    border-radius: var(--border-radius);
    vertical-align: middle;
    position: relative;
    z-index: 1;
  }
`;

export default Performance;
