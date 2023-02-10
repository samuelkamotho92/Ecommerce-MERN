import React from 'react'
import Styled from 'styled-components';
import {SendOutlined} from '@material-ui/icons';
const Container = Styled.div`
height:60vh;
background-color:#fcf5f5;
display:flex;
align-items:center;
justify-content:center;
flex-direction:column;
`;
const Title = Styled.h1`
font-size:70px;
margin-bottom:20px;
`;
const Description = Styled.div`
font-size:24px;
font-weight:300;
margin-bottom:20px;
`;
const InputContainer = Styled.div`
background-color:white;
width:50%;
height:40px;
display:flex;
justify-content:space-between;
border:1px solid lightgray;
`;
const Input = Styled.input`
border:none;
flex:8;
padding-left:20px;
`;
const Button = Styled.button`
flex:1
border:none;
background-color:teal;
color:white;
`;
const Newsletter = () => {
  return (
    <Container>
    <Title>
    Newsletter
    </Title>
    <Description>
Get timely updates from your favourite products
    </Description>
<InputContainer>
<Input placeholder='Email'/>
<Button>
<SendOutlined />
</Button>
</InputContainer>
    </Container>
  )
}

export default Newsletter