import React from 'react'
import Styled from 'styled-components';
import Announcements from '../components/Announcements';
import Footer from '../components/Footer';
import Navabar from '../components/Navabar';
import Newsletter from '../components/Newsletter';
import { Add,Remove } from '@material-ui/icons';

const Container = Styled.div``;
const Wrapper = Styled.div`
padding:50px;
display:flex;
align-items:center; 
justify-content:space-between;

`;
const ImageContainer = Styled.div`
flex:1;
`;
const Image = Styled.img`
width:100%;
height:90vh;
object-fit:cover;
`;
const Title = Styled.h1`
font-weight:200;
`;
const InfoContainer = Styled.div`
flex:1;
padding:0px 50px;
`;
const Description = Styled.p`
margin:20px 0px;
`;
const Price = Styled.span`
font-weight:100;
font-size:40px;
`;
const FilterColor = Styled.div`
width:20px;
height:20px;
border-radius:50%;
background-color:${props=>props.color};
margin:2px 5px;
cursor:pointer;
transition:all 0.5s ease;
&:hover{
  transform:scale(1.1)
}
`;
const FilterContainer = Styled.div`
width:50%;
margin: 0px 0px;
display:flex;
justify-content:space-between;
`;
const Filter = Styled.div`
display:flex;
`;
const FilterTitle = Styled.span`
font-size:20px;
font-weight:200;
`;
const FilterSize = Styled.select`
margin-left:10px;
padding:5px;
`;
const AmountContainer = Styled.div`
display:flex;
align-items:center;
justify-content:center;
font-weight:700;
`;
const FilterSizeOption = Styled.option``;
const AddContainer = Styled.div`
margin:70px 0px;
width:50%;
display:flex;
align-items:center;
justify-content:space-between;
`;
const Amount = Styled.span`
width:30px;
height:30px;
border-radius:10px;
border:1px solid teal;
display:flex;
align-items:center;
justify-content:center;  
margin:0px 5px; 
`;
const Button = Styled.button`
padding:15px;
border:1px solid teal;
background-color:white;
cursor:pointer;
font-weight:500;
&:hover{
  background-color:wheat;
}
`;

const Product = () => {
  return (
    <Container>
       <Announcements />
       <Navabar />
       <Wrapper>
<ImageContainer>
    <Image src='https://i.ibb.co/S6qMxwr/jean.jpg'>
    </Image>
</ImageContainer>
<InfoContainer>
<Title>
Latest fashion
</Title>
<Description>
Lorem ipsum dolor sit amet consectetur
 adipisicing elit. Id, recusandae.
</Description>
<Price>
    2000ksh
</Price>
<FilterContainer>
    <Filter>
        <FilterTitle>
          Color    
        </FilterTitle>
        <FilterColor color="black"/>
        <FilterColor color="darkblue"/>
        <FilterColor color="gray"/>
    </Filter>
    <Filter>
    <FilterTitle>
          Size 
        </FilterTitle>
        <FilterSize>
<FilterSizeOption>XS</FilterSizeOption>
<FilterSizeOption>L</FilterSizeOption>
<FilterSizeOption>M</FilterSizeOption>
<FilterSizeOption>S</FilterSizeOption>
<FilterSizeOption>XL</FilterSizeOption>
        </FilterSize>
    </Filter>
</FilterContainer>
<AddContainer>
<AmountContainer>
<Remove />
<Amount>1</Amount>
<Add />
</AmountContainer>
<Button>ADD TO CART</Button>
</AddContainer>
</InfoContainer>
       </Wrapper>
       <Newsletter />
       <Footer />
    </Container>
  )
}

export default Product