import React ,{useState}  from 'react'
import  Styled from 'styled-components';
import Allproducts from '../components/Allproducts';
import Announcements from '../components/Announcements';
import Footer from '../components/Footer';
import Navabar from '../components/Navabar';
import Newsletter from '../components/Newsletter';
import { mobile } from '../resp';
import { useLocation } from 'react-router-dom';

const Container = Styled.div``;
const FilterContainer = Styled.div`
display:flex;
align-items:center;
justify-content:space-between;
`;
const Filter = Styled.div`
margin:20px;
${mobile({margin:"0px 20px",display:'flex',flexDirection:'column'})}
`;
const Title = Styled.h1`
margin:20px;
`;
const FilterText = Styled.span`
font-size:20px;
font-weight:600;
margin-right:20px;
${mobile({marginRight:"0px"})}
`;

const Select = Styled.select`
padding:10px;
margin-right:20px;
${mobile({margin:"10px 0px"})}
`;
const Option = Styled.option``;

const ProductList = () => {
    const location = useLocation()
    const cat = location.pathname.split('/')[2];
    const [filters,setFilter] = useState({});
    const [sorts,setSort] = useState('newest');
    const handleFilters = (e)=>{ 
e.preventDefault();
const value = e.target.value;
setFilter({
    ...filters,
[e.target.name]:value,
});
    };
    console.log(filters);
  return (
    <Container>
    <Announcements />
    <Navabar />
    <Title>
        {cat}
    </Title>
    <FilterContainer>
<Filter>
    <FilterText>
    Filter Product
    </FilterText>
    <Select name='color'  onChange={handleFilters}>
    <Option  disabled >
Color
    </Option>
        <Option value='white'>white</Option>
        <Option value='black'>black</Option>
        <Option value='red'>red</Option>
        <Option value='blue'>blue</Option>
        <Option value='yellow'>yellow</Option>
        <Option value='green'>green</Option>
    </Select>
    <Select name='size' onChange={handleFilters}>
    <Option  disabled >
Size
    </Option>
        <Option value='XS'>XS</Option>
        <Option value='S'>S</Option>
        <Option value='M'>M</Option>
        <Option value='L'>L</Option>
        <Option value='XL'>XL</Option>
        <Option value='XXL'>XXL</Option>
    </Select>
</Filter>
<Filter>
<FilterText>
    Sort Product
</FilterText>
<Select onChange={e=>setSort(e.target.value)}>
    <Option  disabled >
Brand
    </Option>
        <Option value="newest">Newest</Option>
        <Option value="lv">LV</Option>
        <Option value="paris">Paris</Option>
        <Option value="dubai">Dubai</Option>
        <Option value="kenya">Kenyan</Option>
        <Option value="zara">Zara</Option>
        <Option value="africa">African</Option>
    </Select>
</Filter>
    </FilterContainer>  
<Allproducts cat={cat} filters={filters} sorts={sorts}/>
<Newsletter />
<Footer />
    </Container>
  )
}

export default ProductList