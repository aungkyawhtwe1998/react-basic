import React from "react";
import Nav from "./Nav";
import devImg from "../images/dev.png"
import styled from "styled-components";
import programmerImg from "../images/programmer.webp"
import userImg from "../images/user.webp"
import {Button} from "../Styles/Shares";
const FlexDiv = styled.div`
  display: flex;
  background-color: ${props=>props.theme.colors.primary};
  padding: 0 20px;
  align-items: center;

`

const Flex = styled.div`
  flex:1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
`

const LiStyle = styled.li`
  &:after{
    content:"";
    display:block;
    height: 5px;
    background-color: hotpink;
    transform:scale(0);
    transition: 300ms;
    
  }
  &:hover{
    &:after{
      transform:scaleX(1);
    }
  }
`
export default function Home(){
    return(
        <>
            <Nav />
            <FlexDiv>
                <Flex>
                    <h1>Brighter Myanmar</h1>
                    <h4>Professional Computer Programming Class</h4>
                    <Button>Download Apk</Button>
                </Flex>
                <Flex>
                    <img src={devImg} width="80%" alt="ads"/>
                </Flex>
            </FlexDiv>
            <FlexDiv>
                <Flex>
                    <img src={programmerImg} width="80%" alt="ads"/>
                </Flex>
                <Flex>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque enim fuga minus officiis sunt. Explicabo fugiat illum non sunt vero! Alias beatae distinctio harum odio quasi quos repellendus ullam voluptates.</p>
                </Flex>

            </FlexDiv>
            <FlexDiv>

                <Flex>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque enim fuga minus officiis sunt. Explicabo fugiat illum non sunt vero! Alias beatae distinctio harum odio quasi quos repellendus ullam voluptates.</p>
                </Flex>
                <Flex>
                    <img src={userImg} width="80%" alt="ads"/>
                </Flex>

            </FlexDiv>

        </>
    )
}