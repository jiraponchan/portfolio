import styled from "styled-components";

function Jirapon() {
  return (
    <Contain>
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
  justify-content: center;
  border: 1px solid purple;
  max-width: 1000px;
  flex-direction: column;
  margin: 0px auto;
  min-height: 100vh;
  & h2, h3 {
    font-size:5em;
    margin:5px;
  }
  & h1{
    font-size:1em;  
  }
  & p {
    max-width:640px;
  }
 
`;


export default Jirapon;
