import styled from "styled-components";

function Jirapon() {
  return (
    <Contain id="jirapon">
      <h1>Hi, my name is </h1>
      <h2>Jirapon Chan</h2>
      <h3>I Build thing for web</h3>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente enim
        itaque reiciendis consequuntur magnam ducimus cumque perferendis
        adipisci autem animi. Lorem ipsum dolor sit amet, consectetur
        adipisicing elit. Et odio velit repudiandae beatae, minus, nesciunt
        facilis commodi odit atque magni consectetur dignissimos natus ex enim
        animi inventore iure culpa.
      </p>
    </Contain>
  );
}

const Contain = styled.section`
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

  & h2,
  h3 {
    margin: 5px;
    font-size: clamp(40px, 8vw, 80px);
  }
  & h1 {
    font-size: 1em;
    font-size: clamp(14px, 5vw, 16px);
  }
  & p {
    max-width: 540px;
  }
`;

export default Jirapon;
