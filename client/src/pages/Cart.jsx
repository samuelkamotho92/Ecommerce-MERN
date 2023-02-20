import { Add, Remove } from '@material-ui/icons';
import React,{useState,useEffect} from 'react';
import Styled from 'styled-components';
import Announcements from '../components/Announcements';
import Footer from '../components/Footer';
import Navabar from '../components/Navabar';
import { mobile } from '../resp';
import { useSelector, useDispatch } from 'react-redux';
import StripeCheckout from 'react-stripe-checkout';
import centralSup from '../assets/central super.jpeg';
import axios from 'axios';
import {useHistory} from 'react-router-dom';
const Container = Styled.div`
`;
const Wrapper = Styled.div`
padding:20px;
${mobile({padding :"10px"})}
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

const TopTexts = Styled.div`
${mobile({display:"none"})}
`;
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
border:0.5px solid lightgray;
border-radius:10px;
padding:20px;
height:50vh;
`;

const Bottom = Styled.div`
display:flex;
align-items:center;
justify-content:center;
${mobile({flexDirection:"column"})}
`;

const Product = Styled.div`
display:flex;
justify-content:space-between;
${mobile({flexDirection:"column"})}
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
const ProductAmountCon = Styled.div`
display:flex;
align-items:center;
margin-bottom:20px;
`;
const ProductSize = Styled.span`
font-size:24px;
margin:5px;
`;
const ProductAmount = Styled.div`
font-size:24px;
margin:5px;
${mobile({margin:"5px 15px"})}
`;
const ProdutcActPrice = Styled.div`
font-size:30px;
font-weight:200;
${mobile({marginBottom:"20px"})}
`; 

const Hr = Styled.hr`
background-color:#eee;
border:none;
height:1px;
`

const SummaryTitle = Styled.h1`
font-weight:200;
`;
const SummaryitemText = Styled.div``;
const SummaryitemPrice = Styled.div``;
const Summaryitem = Styled.div`
margin:30px 0px;
display:flex;
justify-content:space-between;
font-weight:${props=>props.type === "total" && "500"}
font-size:${props=>props.type === "total" && "24px"}

`;

const Button = Styled.div`
width:100%;
padding:10px;
background-color:black;
color:white;
display:flex;
align-items:center;
justify-content:center;
cursor:pointer;
font-weight:600;
transition:all 1s ease;
&:hover{
  background-color:teal;
}
`;
console.log(process.env.REACT_APP_STRIPE_KEY);
 const KEY = "pk_test_51MX2dJFIqJP3zxtmcqkI1dHBfR0NM1RCn4CaYvHIGRKcTKOC94VFJaqy6zvHuDuWyHtJSImGKDevrPoNwMjvG3ZU00BgsbrGj3";
const Cart = () => {
  const cart = useSelector(state=>state.cart)
  const [stripeToken,setStripeToken] = useState(null);
  const onToken = (token)=>{
setStripeToken(token);
  }
  console.log(stripeToken);
const history = useHistory()
  useEffect(()=>{
    const sendReq = async()=>{
      try {
  const url = `http://localhost:8000/api/v1/pay/payments`;
  const resp = await axios.post(url,{
  tokenId:stripeToken,
  amount:cart.total * 100
});
console.log(resp.data);
        history.push('/')
    }catch(err){
console.log(err);
    }
  }
sendReq();
},[stripeToken])
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
  {
    cart.products.map(product=>(
<Product>
    <ProductDetail>
        <Image  src={product.img}/>
    <Details>
<ProductName><b>Product: </b>{product.title}</ProductName>
<ProductId><b>Id: </b>{product._id}</ProductId>
<ProductColor color={product.color}/>
<ProductSize><b>Size: </b>{product.size}</ProductSize>
    </Details>
    </ProductDetail>
    <ProductPrice>
<ProductAmountCon>
<Add />
<ProductAmount>{product.quantity}</ProductAmount>
<Remove />
</ProductAmountCon>
<ProdutcActPrice>{product.price*product.quantity}</ProdutcActPrice>
    </ProductPrice>
</Product>

    ))
  }

<Hr />
 </Info>
 <Summary>
<SummaryTitle>
Order Summary
</SummaryTitle>
<Summaryitem> 
<SummaryitemText>
  SubTotal
</SummaryitemText>
<SummaryitemPrice>
  2000ksh
</SummaryitemPrice>
</Summaryitem>
<Summaryitem>
<SummaryitemText>
  Estimated Shipping
</SummaryitemText>
<SummaryitemPrice>
  100ksh
</SummaryitemPrice>
</Summaryitem>
<Summaryitem>
<SummaryitemText>
Shipping Discount
</SummaryitemText>
<SummaryitemPrice>
  50ksh
</SummaryitemPrice>
</Summaryitem>
<Summaryitem type="total">
<SummaryitemText>
  Total
</SummaryitemText>
<SummaryitemPrice>
{cart.total}
</SummaryitemPrice>
</Summaryitem>
<StripeCheckout
name="Central Supermarket"
image={centralSup}
billingAddress
shippingAddress
description={`Your total is $${cart.total}`}
amount={cart.total * 100}
token={onToken}
stripeKey={KEY}>
  <Button>CHECKOUT NOW</Button>
</StripeCheckout>
 </Summary>
    </Bottom>

 </Wrapper>
 <Footer />
    </Container>
  )
}

export default Cart