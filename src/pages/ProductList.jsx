import React from 'react'
import  Styled from 'styled-components';
import Allproducts from '../components/Allproducts';
import Announcements from '../components/Announcements';
import Footer from '../components/Footer';
import Navabar from '../components/Navabar';
import Newsletter from '../components/Newsletter';
const Container = Styled.div``;
const FilterContainer = Styled.div`
display:flex;
align-items:center;
justify-content:space-between;
margin

`;
const Filter = Styled.div`
margin:20px;
`;
const Title = Styled.h1`
margin:20px;
`;
const FilterText = Styled.span`
font-size:20px;
font-weight:600;
margin-right:20px;
`;

const Select = Styled.select`
padding:10px;
margin-right:20px;
`;
const Option = Styled.option``;

const ProductList = () => {
  return (
    <Container>
    <Announcements />
    <Navabar />
    <Title>
        Clothes
    </Title>
    <FilterContainer>
<Filter>
    <FilterText>
    Filter Product
    </FilterText>
    <Select>
    <Option  disabled selected>
Color
    </Option>
        <Option>White</Option>
        <Option>Black</Option>
        <Option>Red</Option>
        <Option>Blue</Option>
        <Option>Yellow</Option>
        <Option>Green</Option>
    </Select>
    <Select>
    <Option  disabled selected>
Size
    </Option>
        <Option>XS</Option>
        <Option>S</Option>
        <Option>M</Option>
        <Option>L</Option>
        <Option>XL</Option>
        <Option>XXL</Option>
    </Select>
</Filter>
<Filter>
<FilterText>
    Sort Product
</FilterText>
<Select>
    <Option  disabled selected>
Brand
    </Option>
        <Option>LV</Option>
        <Option>Paris</Option>
        <Option>Dubai</Option>
        <Option>Kenyan</Option>
        <Option>Zara</Option>
        <Option>African</Option>
    </Select>
</Filter>
    </FilterContainer>  
<Allproducts />
<Newsletter />
<Footer />
    </Container>
  )
}

export default ProductList