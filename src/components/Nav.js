import React from "react";
import logoImg from "../images/profile.jpg";
import styled from "styled-components";
import { useLoginContext } from "../store/LoginContextApi";
import { Navigate, useNavigate } from "react-router-dom";
const FlexDiv = styled.div`
  display: flex;
  background-color: ${props=>props.theme.colors.primary};
  height: 45px;
  padding: 0 20px;
  align-items: center;
  border-bottom: 0.3px solid rgba(0,0,0,0.1);

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
const LeftDiv = styled.div`
  display: flex;
  align-items: center;
`
const RightDiv = styled.div`
  flex: 1;
`

const UlDiv = styled.ul`
  display: flex;
  justify-content: flex-end;

`
const H1_STYLE = {
    marginLeft:"10px",
    color:"#ff8888"
}

const ATAG_STYLE = {
    color:"hotpink",
    padding:"0 5px",
}
export default function Nav(){
  const navigate = useNavigate();
  const {loggedIn, setLoggedIn} = useLoginContext();
  const logout = () =>{
    setLoggedIn(false);
    navigate('/');
  }
    return(
        <FlexDiv>
            <LeftDiv>
                <img src={logoImg} width="30px" height="30px" alt=""/>
                <strong style={H1_STYLE}>Aung Kyaw Htwe</strong>
            </LeftDiv>
            <RightDiv>
                <UlDiv>
                    <LiStyle><a style={ATAG_STYLE} href="#">Download</a></LiStyle>
                    <LiStyle><a style={ATAG_STYLE} onClick={logout} href="#">{loggedIn?"Logout":'Login'}</a></LiStyle>
                </UlDiv>
            </RightDiv>
        </FlexDiv>

    )
}