import React from "react";
import styled from "styled-components";
const Button = styled.button`
  border: none;
  border-radius: 10px;
  background-color: ${(props)=>props.theme.colors.primary};
  color: white;
  padding: 10px 10px ;
  margin: 10px;
  transition: 0.5s;
  &:hover{
    background-color: ${(props)=> props.theme.colors.accent};
  }
`
function CompoB(){
    return(
        <div>
            <Button>Click me</Button>
            <a href="#">Go to our site</a>
        </div>
    )
}
export default CompoB