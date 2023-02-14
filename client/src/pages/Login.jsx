import React from 'react'
import Styled from 'styled-components';
import { mobile } from '../resp';
const Container  =  Styled.div`
width:100vw;
height:100vh;
background:linear-gradient(
    rgba(255,255,255,0.5),
    rgba(255,255,255,0.5)
),     url("https://images.pexels.com/photos/6984650/pexels-photo-6984650.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940") center;
background-size:cover;
display:flex;
align-items:center;
justify-content:center;

`;
const Wrapper = Styled.div`
padding:20px;
width:25%;
background-color:white;
${mobile({width:"75%"})}
`;
const Title = Styled.h1`
font-size:24px;
font-weight:300;

`;
const Form = Styled.form`
display:flex;
flex-direction:column;

`;
const Input = Styled.input`
flex:1;
min-width:40%;
margin:10px 0px;
padding:10px;
`;
const Button = Styled.button`
width:40%;
border:none;
padding:15px 20px;
background-color:teal;
cursor:pointer;
margin-bottom:10px;
`;
const Link = Styled.a`
cursor:pointer;
margin:5px 0px;
font-size:12px;
text-decoration:underline;
`;
const Login = () => {
  return (
    <Container>
    <Wrapper>
        <Title>SIGN IN</Title>
<Form>

    <Input  placeholder='username' />
    <Input  placeholder="password"/>
    <Button>LOG IN</Button>
    <Link>FORGOT PASSWORD</Link>
    <Link>CREATE A NEW ACCOUNT</Link>
</Form>
     
    </Wrapper>
    </Container>
  )
}

export default Login