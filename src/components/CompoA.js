import React from "react";
/*
import '../styles/CompoA.css'
*/
import styled from "styled-components";
const Container = styled.div`
  width:350px;
  height: 150px;
  background-color: ${(props)=> props.theme.colors.primary};
  h1{
    color: ${(props)=>props.theme.colors.secondary};
    font-size: ${(props)=>props.theme.font.h1size};
  }
  h2{
    color:${(props)=>props.theme.colors.accent || "blue"};
    font-size: ${(props)=> props.theme.font.h2size} ;
  }
`

function CompoA(){
    return(
        <Container>
            <a href="#">Go to page</a>
            <h1 >Cpmpo A Title </h1>
            <h2 >Compo A slogan</h2>
        </Container>
    )
}
export default CompoA