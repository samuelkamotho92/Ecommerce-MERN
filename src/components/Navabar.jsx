import React from 'react';
import Styled from 'styled-components';
import {Search,ShoppingCartOutlined} from '@material-ui/icons';
import Badge from '@mui/material/Badge';
const Container = Styled.div`
height:60px;
`;
const Wrapper = Styled.div`
padding:10px 20px;
display:flex;
align-items:center
justify-content:space-between
`;

const Language = Styled.span`
font-size:14px;
cursor:pointer;
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
`

const Logo = Styled.h1`
font-weight:bold;
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
`
const Center = Styled.div`
flex:1;
text-align:center;
`;

const MenuItems = Styled.div`
font-size:14px;
cursor:pointer;
margin-left:25px;
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
<Input>

</Input>
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