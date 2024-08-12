
import styled from 'styled-components'
const Mul_button = ({valuex,setValuex,war,setWar}) => {
    const arr = [1,2,3,4,5,6];
    

  return (
    <>
        <T>
        <To>
        {arr.map((value,i)=>{
            return (<Box isvalue = {value === valuex ? true : false} key={i} onClick={()=> setValuex(value)}>{value}</Box>)
        })}
        </To>
        {war ? <p style={{"fontSize":"24px","fontWeight":"700px","alignSelf":"end"}}>Select Number</p>  : <p id='warning'>You have not selected any number</p>}
        </T>
        
    </>
  )
}

export default Mul_button;
 

const T = styled.div`
  display: flex;
  align-items: end;
  flex-direction: column;
  justify-content: space-between;
  gap: 20px;
  #warning{
    font-size: 24px;
    font-weight: 400;
    color: #ff0c0c;
    
  }
`
const To = styled.div`
  display: flex;
  gap: 12px;
  align-items: start;
`
const Box = styled.div`
    width: 72px;
    height: 72px;
    border:1px solid black;
    cursor: pointer;
    font-size: 24px;
    font-weight: 700;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${(props)=>(props.isvalue ? 'black' : 'white')};
    color: ${(props)=>(props.isvalue ? 'white' : 'black')};
`

