import React from "react";
import Score from "./Score";
import Mul_button from "./mul-button";
import styled from "styled-components";
import Dice from "./dice";
import { useState } from "react";

const Gameplay = () => {
  const random = (min,max)=>{
    return Math.floor(Math.random() * (max - min)) + min;
}
  const [valuex , setValuex] = useState()
  const [x,setX] = useState([1,random(1,6)])
  const [sc,setSc] =useState(0)
  const [war,setWar] = useState(true)
  
  
  return (
    <>
      <Top_sec>
        <div style={{"display":"flex","justifyContent":"space-around","marginTop":"10px","alignItems":"center"}}>
        <Score sc= {sc} setSc={setSc}/>
        <Mul_button valuex={valuex} setValuex={setValuex} war={war} setWar={setWar}/>
        </div>
        <Dice x={x} setX={setX} sc={sc} setSc={setSc} setValuex={setValuex} valuex={valuex} setWar={setWar} random={random}/>
      </Top_sec>
    </>
  );
};

export default Gameplay;
const Top_sec = styled.div`
  
`
