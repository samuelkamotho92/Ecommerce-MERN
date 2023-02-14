import React from 'react'
import Styled from 'styled-components';
import { categories } from '../Data';
import CategoriesItem from './CategoriesItem';
import { mobile } from '../resp';
const Container = Styled.div`
display:flex;
padding:20px;
justify-content:space-between;
${mobile({padding:"0px",flexDirection:"column"})}
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