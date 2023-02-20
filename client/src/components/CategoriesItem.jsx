import React from 'react';
import Styled from 'styled-components';
import {mobile} from '../resp';
import {Link} from 'react-router-dom';
const Container = Styled.div`
flex:1;
margin:3px;
height:70vh;
position:relative;
`;
const Image = Styled.img`
width:100%;
height:100%;
object-fit:cover;
${mobile({height:"20vh"})}
`;
const Info = Styled.div`
position:absolute;
top:0;
bottom:0;
width:100%;
height:100%;
display:flex;
align-items:center;
justify-content:center;
flex-direction:column;
`;
const Title = Styled.h1`
color:white;
margin-bottom:20px;
`;
const Button = Styled.button`
border:none;
padding:10px;
background-color:white;
color:gray;
cursor:pointer;
`;
const CategoriesItem = ({item}) => {
  return (
    <Container>
      <Link to={`/products/${item.cat}`}>
      <Image src={item.img} alt={item.id}>
</Image>
<Info>
    <Title>{item.title}</Title>
    <Button>SHOP NOW</Button>
</Info>
      </Link>
    </Container>
  )
}

export default CategoriesItem