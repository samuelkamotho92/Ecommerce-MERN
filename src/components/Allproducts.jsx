import React from 'react'
import Styled from 'styled-components';
import Product from './Product';
import { popularProducts } from '../Data';
const Container = Styled.div`
padding:20px;
display:flex;
flex-wrap:wrap;
justify-content:space-between;  
`;
const Allproducts = () => {
  return (
    <Container>
 {popularProducts.map(item=>(
    <Product item={item} key={item.id}/>
 ))}
    </Container>
  )
}

export default Allproducts