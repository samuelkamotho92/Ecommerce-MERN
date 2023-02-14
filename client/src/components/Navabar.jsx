import React from 'react';
import Styled from 'styled-components';
import {Search,ShoppingCartOutlined} from '@material-ui/icons';
import Badge from '@mui/material/Badge';
import { mobile } from '../resp';
const Container = Styled.div`
height:60px;
${mobile({height:"50px"})}
`;
const Wrapper = Styled.div`
padding:10px 20px;
display:flex;
align-items:center
justify-content:space-between
${mobile({padding:"10px 0px"})}
`;

const Language = Styled.span`
font-size:14px;
cursor:pointer;
${mobile({display:"none"})}
`
const SearchContainer = Styled.div`
border:0.5px solid lightgray;
display:flex;
align-items:center;
margin-left:25px;
padding:5px;

`
const Input = Styled.input`
border:none;
${mobile({width:"50px"})}
`

const Logo = Styled.h1`
font-weight:bold;
${mobile({fontSize:"24px"})}
`

const Left = Styled.div`
flex:1;
display:flex;
align-items:center;
`
const Right = Styled.div`
flex:1;
display:flex;
align-items:center;
justify-content:flex-end;
${mobile({flex:2,justifyContent:"center"})}
`
const Center = Styled.div`
flex:1;
text-align:center;
`;

const MenuItems = Styled.div`
font-size:14px;
cursor:pointer;
margin-left:25px;
${mobile({fontSize:"12px",marginLeft:"10px"})}

`
const Navabar = () => {
  return (
    <Container>
        <Wrapper>
  <Left>
    <Language>
     ENG
    </Language>
     <SearchContainer>
<Input placeholder='search' />
<Search style={{color:'gray',fontSize:16}}/>
    </SearchContainer>
  </Left>
  <Center><Logo>CENTRAL SUPERMARKET</Logo></Center>
  <Right>
    <MenuItems>Sign Up</MenuItems>
    <MenuItems>Sign In</MenuItems>
    <MenuItems>
    <Badge badgeContent={4} color="secondary">
    <ShoppingCartOutlined />
</Badge>

    </MenuItems>
  </Right>
        </Wrapper>
    </Container>
  )
}

export default Navabar