import React from 'react'
import styled from 'styled-components'
const Score = ({sc,setSc}) => {
  return (
    <>
        <Container>
            <h1 style={{"fontSize":"90px","fontWeight":"100px","lineHeight":"90px"}}>{sc}</h1>
            <p style={{"fontSize":"24px","fontWeight":"500px"}}>Total Score</p>
        </Container>
    </>
  )
}

export default Score

const Container = styled.div`
    width: 135px;
    height: 151px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

`