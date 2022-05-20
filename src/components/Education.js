import React from "react";
import styled from "styled-components";

export const Education = () => {
  return (
    <Container>
      <Heading>
        <h2>Education</h2>
      </Heading>
      <Inner>
        <School>
          <button>
            <span>เรียน 1</span>
          </button>
          <button>
            <span>เรียน 2</span>
          </button>
          <button>
            <span>เรียน 3</span>
          </button>
        </School>
        <Detail>
          <Panel>
            <ul>
              <li>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Lorem
                ipsum dolor sit amet, consectetur adipisicing elit. Temporibus,
                ullam.
              </li>
              <li>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Lorem
                ipsum dolor sit amet, consectetur adipisicing elit. Temporibus,
                ullam.
              </li>
              <li>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Lorem
                ipsum dolor sit amet, consectetur adipisicing elit. Temporibus,
                ullam.
              </li>
            </ul>
          </Panel>
        </Detail>
      </Inner>
    </Container>
  );
};

const Container = styled.div`
  max-width: 700px;
  margin: 0 auto;
  padding: 100px 0px;

  border: 1px solid #12a;
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
  display: flex;
  border: 1px solid #21bc;
`;

const School = styled.div`
  padding: 0px;
  margin: 0px;

  & button {
    width: 100%;
    height: 42px;
    align-items: center;
    background-color: #1a1a1a;
    text-align: left;
    padding: 0px 20px 2px;
    border:0px ;
    background-color: transparent;
    border-left: 2px solid;
    
  }
`;
const Detail = styled.div`
  border: 1px solid #1ba;
`;
const Panel = styled.div`
  border: 1px solid #1b2a;
`;

export default Education;
