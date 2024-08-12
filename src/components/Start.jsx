import React from "react";
import styled from "styled-components";
import dice from "../assets/dice.png";
const Start = ({ state,setState }) => {

  return (
    <Container>
      <div id="f-div">
        <img src={dice} alt="" />
        <div id="f-f-div">
            <h1 style={{"fontSize":"96px"}}>DICE GAME</h1>
            <Button onClick={()=>{
              setState(!state)
            }}>Play Now</Button>
        </div>
      </div>
    </Container>
  );
};

export default Start;

const Container = styled.div`
  display: flex;
  width: 100vw;
  margin: 0 auto;
  height: 100vh;
  align-items: center;
  justify-content: center;
  #f-div {
    width: 1182px;
    height: 522px;
    display: flex;
    align-items: center;
  }
  #f-f-div{
    align-self: center;
    display: flex;
    flex-flow: column;
    justify-content: center;
    align-items: center;
    gap: 20px;
  }
  img {
    width: 649px;
    height: 100%;
  }
`;
const Button = styled.button`
  width: 220px;
  height: 44px;
  border-radius: 5px;
  pad: 10px 18px;
  background-color: #000000;
  color: #ffffff;
  font-size: 16px;
  border: none;
  cursor: pointer;
  align-self:flex-end ;
  border: 1px solid transparent;
  transition: 0.3s ease-in;
  &:hover{
    background-color: #ffffff;
    color: #000000;
    border: 1px solid black;
    transition: 0.3s ease-in;
  }
  
`;
