import React from 'react'
import { Facebook,Instagram, Twitter ,RoomOutlined ,PhoneOutlined, MailOutline} from '@material-ui/icons';
import Styled from 'styled-components';
import Mpesa from '../assets/Lipa na mpesa.jpg'
import {mobile} from '../resp'
const Container = Styled.div`
display:flex;
align-items:center;
justify-content:space-between;
${mobile({flexDirection:"column"})}
`;
const Left = Styled.div`
flex:1;
display:flex;
flex-direction:column;
padding:20px;
`;
const Center = Styled.div`
flex:1;
padding:20px;
${mobile({display:"none"})}
`;
const Title = Styled.h3`
margin-bottom:30px;
`;
const List = Styled.ul`
margin:0;
padding:0;
list-style:none;
display:flex;
flex-wrap:wrap;
`;

const ListItem = Styled.li`
width:50%;
margin-bottom:20px;
`

const Right = Styled.div`
flex:1;
`;
const Description = Styled.p`
margin:20px 0px;

`;
const Logo = Styled.h1`

`;
const SocialContainer = Styled.div`
display:flex;
`;
const Payment = Styled.img`
width:50%; 
height:80px;
`;
const SocialIcon = Styled.div`
width:40px;
height:40px;
border-radius:50%;
color:white;
background-color:#${props=>props.color};
display:flex;
align-items:center;
justify-content:center;
cursor:pointer;
transition:all 0.5s ease;
&:hover{
   transform:scale(1.1)
};
margin:5px;
`;

const ContactItem = Styled.div`
margin-bottom:20px;
display:flex;
align-items:center;
`

const Footer = () => {
  return (
    <Container>
<Left>
<Logo>
Central Supermarket
</Logo>
<Description>
    Best Supermarket in Mukurweini ,get your orders delivered instant
</Description>
<SocialContainer>
<SocialIcon color='3B5999'>
<Facebook />
</SocialIcon>
<SocialIcon color='E4405F'>
<Instagram />
</SocialIcon>
<SocialIcon color='55ACEE'>
<Twitter />
</SocialIcon>
</SocialContainer>
</Left>
<Center>
<Title>Links</Title>
<List>
    <ListItem>Home</ListItem>
    <ListItem>Cart</ListItem>
    <ListItem>My Account</ListItem>
    <ListItem>Orders</ListItem>
    <ListItem>WishList</ListItem>
    <ListItem>Men Fashion</ListItem>
    <ListItem>Women Fashion</ListItem>
    <ListItem>Cakes and Bread</ListItem>
    <ListItem>Home Accesories</ListItem>

</List>
</Center>
<Right>
<Title>Contact Us</Title>
<ContactItem>
    <RoomOutlined 
    style={{marginRight:'10px'}}/>
P.O.BOX 2345 , Mukurweni
</ContactItem>
<ContactItem>
    <PhoneOutlined 
style={{marginRight:'10px'}}
/>
    0700112233
</ContactItem>
<ContactItem>
    <MailOutline style={{marginRight:'10px'}}/>
    centralsuper@gmail.com
</ContactItem>
<Payment src={Mpesa}/>
</Right>
    </Container>
  )
}

export default Footer