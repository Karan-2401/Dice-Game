import React, { useRef, useState } from 'react'
import styled from 'styled-components'
import dice_1 from '../assets/dice/dice_1.png'
import dice_2 from '../assets/dice/dice_2.png'
import dice_3 from '../assets/dice/dice_3.png'
import dice_4 from '../assets/dice/dice_4.png'
import dice_5 from '../assets/dice/dice_5.png'
import dice_6 from '../assets/dice/dice_6.png'
const dices = [1,dice_1,dice_2,dice_3,dice_4,dice_5,dice_6]

const Dice = ({setX,x,sc,setSc,setValuex,valuex,setWar,random}) => {
    const [state,setState] = useState(false)
    
    const [xel,setXel] =useState(true)
    const demo = ()=>{
        console.log(sc)
        const cash = [...x,x[1]=random(1,6)]
        if(!valuex){
            setWar(()=> false);
            setXel(true)
             
          }
          else{
            
            setWar(()=> true);
            setXel(false)
           
            
            
            if(x[1] == valuex){
                setSc((prev)=> prev+valuex);  
                setValuex(null); 
                console.log("win");
                
                
              }else{
                setSc((prev)=> prev-2);
                setValuex(null);
              } 
          } 
    }
    
  return (
  <>
    <Mice>
        {
            xel ? <img src={dices[x[0]]} onClick={demo}/>:
            <img src={dices[x[1]]} onClick={demo}/>
        }
    
    <p>Click On Dice To Roll</p>
    <button id="f" onClick={()=>{
        setSc(0)
        
        setValuex(0)
        setXel(true)
    }}>Reset Score</button>
    <button id="s" onClick={()=>{
        setState(!state)
    }}>Show Rules</button>
    </Mice>
    {state && <Bottom>
        <div><h1>How to play dice game</h1></div>
        <div>
            <p>1. Select any number</p>
            <p>2. Click on the dice</p>
            <p>3. After clicking on dice if selected number is equal to dice number you will get same point.</p>
            <p>4. If you get wrong guess then 2 point will be deducted</p>
        </div>
    </Bottom>}
  </>
  )
}

export default Dice
const Mice = styled.div`
    width: 250px;
    height: 449px;
    margin: 80px auto;
    display: flex;
    align-items: center;
    flex-direction: column;
    p{
        font-size: 25px;
        font-weight: 400;
    }
    #f{
        width: 220px;
        height: 44px;
        border-radius: 5px;
        border: 1px solid black;
        padding: 10px 18px;
        background-color: #ffffff;
        font-size: 15px;
        font-weight: 700;
        margin-top: 20px;
        cursor: pointer;
        transition: 0.3s ease-in;
        &:hover{
            background-color: #000000;
            color: #ffffff;
            transition: 0.3s ease-in;
        }
    }
    #s{
        width: 220px;
        height: 44px;
        border-radius: 5px;
        border: 1px solid black;
        padding: 10px 18px;
        color: #ffffff;
        background-color: #000000;
        font-size: 15px;
        font-weight: 700;
        cursor: pointer;
        margin-top: 20px;
        transition: 0.3s ease-in;
        &:hover{
            background-color: #ffffff;
            color: #000000;
            transition: 0.3s ease-in;
        }
    }
`
const Bottom = styled.div`
    width: 794px;
    height: 200px;
    gap: 24px;
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    background-color: #fbf1f1;
    border-radius: 9px;
    padding: 10px 18px;
    margin-top: -55px;
    transition: 0.3s ease-in;
`