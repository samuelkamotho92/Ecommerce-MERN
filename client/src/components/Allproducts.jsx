import React,{useState,useEffect} from 'react'
import Styled from 'styled-components';
import Product from './Product';
import { popularProducts } from '../Data';
import axios from 'axios';
const Container = Styled.div`
padding:20px;
display:flex;
flex-wrap:wrap;
justify-content:space-between;  
`;
const Allproducts = ({cat,filters,sorts}) => {
const [products,setProducts] = useState([]);
const [filterProd,setFilterProd] = useState([]);
  useEffect(()=>{
const getProd = async()=>{
  try
  {
    const url = `http://localhost:8000/api/v1/product/getProducts?category=${cat}`;
    const resp = await axios.get(cat ? url : `http://localhost:8000/api/v1/product/getProducts`);
    setProducts(resp.data);
  }catch(err){
console.log(err);
  }
}
getProd();
  },[cat])

  useEffect(()=>{
cat && setFilterProd(
  products.filter((item)=> Object.entries(filters).every(([key,value])=> item[key].includes(value)
  ))
)
  },[products,cat,filters,sorts]);

  useEffect(()=>{
    let sortedValue ;
if(sorts === "newest"){
  console.log(filterProd);
 sortedValue =  filterProd.sort((a,b)=>a.createdAt - b.createdAt);
 setFilterProd(sortedValue);
  // console.log(sorts)
// setFilterProd((prev)=>{
// [...prev].sort((a,b)=>a.createdAt - b.createdAt)
// })
// console.log(filterProd);
// }else{
// setFilterProd((prev)=>
// [...prev].sort((a,b)=>a.price - b.price))
}else if(sorts === "lv"){
sortedValue = filterProd.sort((a,b)=>a.price - b.price);
setFilterProd(sortedValue);
}else{
  sortedValue = filterProd.sort((a,b)=>a.price - b.price);
setFilterProd(sortedValue);
}
  },[sorts])
return (
    <Container>
 {cat ? filterProd.map(item=>(
    <Product item={item} key={item.id}/>
 )): products.slice(0,7).map(item=>(
  <Product item={item} key={item.id}/>
))}
    </Container>
  )
}

export default Allproducts