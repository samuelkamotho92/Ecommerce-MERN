import React,{useState,useEffect} from 'react'
import Styled from 'styled-components'
import {ShoppingCartOutlined,FavoriteBorderOutlined,SearchOutlined} from '@material-ui/icons';
import {Link} from 'react-router-dom'
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import { publicRequets } from '../requestMethod';
const Info = Styled.div`
opacity:0;
width:100%;
height:100%;
position:absolute; 
top:0;
left:0;
background-color:rgba(0,0,0,0.2);
z-index:3;
display:flex;
align-items:center;
justify-content:center;
transition:all 0.5s ease;
cursor:pointer;
`;

const Container = Styled.div`
flex:1;
margin:5px;
min-width:280px;
height:350px;
display:flex;
align-items:center;
justify-content:center;
background-color:#f5fbfd;
position:relative;
&:hover ${Info}{
opacity:1;
}
`;
const Circle = Styled.div`
width:200px;
height:200px;
border-radius:50%;
background-color:white;
position:absolute;
`;
const Image = Styled.img`
height:75%;
z-index:2;
`;

const Icon = Styled.div`
width:40px;
height:40px;
border-radius:50%;
background-color:white;
display:flex;
align-items:center;
justify-content:center;
margin:10px;
transition:all 0.5s ease;
&:hover{
  background-color:#e9f5f5;
  transform:scale(1.1);
}
`;
const Product = ({item}) => {
  return (
  <Container>
  <Circle />
  <Image src={item.img}/>
  <Info>
    <Icon>
<ShoppingCartOutlined />
    </Icon>
    <Icon>
      <Link to={`/product/${item._id}`}>
      <SearchOutlined />
      </Link>
    </Icon>
    <Icon>
<FavoriteBorderOutlined />
    </Icon>
  </Info>
    </Container>
  )
}

export default Product