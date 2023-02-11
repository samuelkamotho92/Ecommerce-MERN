import React from 'react';
import Styled from 'styled-components';
import { mobile } from '../resp';
const Container  =  Styled.div`
width:100vw;
height:100vh;
background:linear-gradient(
    rgba(255,255,255,0.5),
    rgba(255,255,255,0.5)
), url("https://images.pexels.com/photos/6984661/pexels-photo-6984661.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940") center;
background-size:cover;
display:flex;
align-items:center;
justify-content:center;

`;
const Wrapper = Styled.div`
padding:20px;
width:40%;
background-color:white;
${mobile({width:"75%"})}
`;
const Title = Styled.h1`
font-size:24px;
font-weight:300;

`;
const Form = Styled.form`
display:flex;
flex-wrap:wrap;

`;
const Input = Styled.input`
flex:1;
min-width:40%;
margin:20px 10px 0px 0px;
padding:10px;
`;
const Agreement = Styled.span`
font-size:12px;
margin:20px 0px;
`;
const Button = Styled.button`
width:40%;
border:none;
padding:15px 20px;
background-color:teal;
cursor:pointer;
`;
const Register = () => {
  return (
    <Container> 
    <Wrapper>
        <Title>REGISTER</Title>
<Form>
    <Input  placeholder="first name"/>
    <Input  placeholder="Last name"/>
    <Input  placeholder="email"/>
    <Input  placeholder='username' />
    <Input  placeholder="password"/>
    <Input  placeholder="passwordConfirm"/>
    <Agreement>
By creating an account , You accept your data to be processed with 
the <b>PRIVACY POLICY</b>
    </Agreement>
    <Button>CREATE</Button>
</Form>
     
    </Wrapper>
    </Container>
  )
}

export default Register