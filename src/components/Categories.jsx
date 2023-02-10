import React from 'react'
import Styled from 'styled-components';
import { categories } from '../Data';
import CategoriesItem from './CategoriesItem';
const Container = Styled.div`
display:flex;
padding:20px;
`;
const Categories = () => {
  return (
    <Container>
{categories.map(item=>(
<CategoriesItem  item={item}/>
))}
    </Container>
  )
}

export default Categories