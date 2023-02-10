import { Add, Remove } from '@material-ui/icons';
import React from 'react'
import Styled from 'styled-components';
import Announcements from '../components/Announcements';
import Footer from '../components/Footer';
import Navabar from '../components/Navabar';
const Container = Styled.div`
`;
const Wrapper = Styled.div`
padding:20px;
`;
const Title = Styled.h1`
text-align:center;
font-weight:300;
`;
const Top = Styled.div`
display:flex;
align-items:center;
justify-content:space-between;
padding:20px;
`;

const TopBottom = Styled.button`
padding:10px;
font-weight:600;
cursor:pointer;
border:${props=>props.type === "filled" && "none"};
background-color:${props=>props.type === "filled" ? "black" :"transparent"};
color:${props=>props.type === "filled" && "white"}
`;

const TopTexts = Styled.div``;
const TopText = Styled.span`
text-decoration:underline;
cursor:pointer;
margin:0px 10px;
`;
const Info = Styled.div`
flex:3;

`;
const Summary = Styled.div`
flex:1;
`;

const Bottom = Styled.div`
display:flex;
align-items:center;
justify-content:center;
`;

const Product = Styled.div`
display:flex;
justify-content:space-between;
`;
const ProductDetail = Styled.div`
flex:2;
display:flex;
`;
const ProductPrice = Styled.div`
flex:1;
display:flex;
flex-direction:column;
align-items:center;
justify-content:center;
`;
const Image = Styled.img`
width:200px;

`;
const ProductName = Styled.span``;
const Details = Styled.div`
display:flex;
padding:20px;
flex-direction:column;
justify-content:space-around;
`;
const ProductId = Styled.span``;
const ProductColor = Styled.div`
width:20px;
height:20px;
border-radius:50%;
 background-color:${props=>props.color};
`;
const ProductAmountCon = Styled.div``;
const ProductSize = Styled.span``;
const ProductAmount = Styled.div``;
const ProdutcActPrice = Styled.div``;
const Cart = () => {
  return (
    <Container>
        <Announcements />
 <Navabar />
 <Wrapper>
    <Title>
Your Bag
    </Title>
    <Top>
  <TopBottom>
Continue Shopping
  </TopBottom>
  <TopTexts>
    <TopText>
Shopping Bag (7)
    </TopText>
    <TopText>
        Your WishList
    </TopText>
  </TopTexts>
  <TopBottom type='filled'> 
    CHECKOUT NOW
  </TopBottom>
    </Top>
    <Bottom>
 <Info>
<Product>
    <ProductDetail>
        <Image  src='https://i.pinimg.com/originals/2d/af/f8/2daff8e0823e51dd752704a47d5b795c.png'/>
    <Details>
<ProductName><b>Product: </b>New T-shirt</ProductName>
<ProductId><b>Id: </b>0987654321</ProductId>
<ProductColor color='gray'/>
<ProductSize><b>Size: </b>L</ProductSize>
    </Details>
    </ProductDetail>
    <ProductPrice>
<ProductAmountCon>
<Add />
<ProductAmount>2</ProductAmount>
<Remove />
</ProductAmountCon>
<ProdutcActPrice>2000ksh</ProdutcActPrice>
    </ProductPrice>
    <Summary>
summary
 </Summary>
</Product>
 </Info>

    </Bottom>

 </Wrapper>
 <Footer />
    </Container>
  )
}

export default Cart