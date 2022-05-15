import React,{useRef} from "react";
import {useNavigate} from 'react-router-dom';
import Nav from './Nav';
import styled from "styled-components";
import {Button} from "../Styles/Shares";
import {useLoginContext} from "../store/LoginContextApi";

const SectionDiv = styled.section`
  background-color: ${(props)=>props.theme.colors.primary};
  display: flex;
  flex-direction: column;
  width: 500px;
  align-items: center;
  margin-top: 20px;
  padding: 10px 10px;
  justify-content: center;
`
const H1_Style = styled.h1`
  margin: 20px 0;
  color:#ff8800;
`
const InputStyle = styled.input`
  display: block;
  width: 250px;
  padding: 5px 10px;
  margin-bottom: 20px;
  border: none;
  &:focus{
    outline: 1px solid #eee;
  }
`

export default function Login(){
    const navigate = useNavigate();
    const {setLoggedIn} = useLoginContext();
    const phoneRef = useRef();
    const passwordRef = useRef();
    const login = (e)=>{
        e.preventDefault();
        let user = {
            phone:phoneRef.current.value,
            password:passwordRef.current.value
        };
        console.log(user);
        setLoggedIn(true);
        phoneRef.current.value = "";
        passwordRef.current.value = "";
        navigate('/home');
    }
    return(
        <>
            <Nav/>
            <SectionDiv>
                <H1_Style>Login To View Home Page</H1_Style>
                <form onSubmit={login}>
                    <InputStyle type="tel" placeholder='phone' ref={phoneRef}/>
                    <InputStyle type="password" placeholder='password' ref={passwordRef}/>
                    <Button type="submit">Login</Button>
                </form>
            </SectionDiv>
        </>
    )
}