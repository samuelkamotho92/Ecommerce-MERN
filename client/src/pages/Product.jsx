import React,{useState,useEffect} from 'react'
import Styled from 'styled-components';
import Announcements from '../components/Announcements';
import Footer from '../components/Footer';
import Navabar from '../components/Navabar';
import Newsletter from '../components/Newsletter';
import { Add,Remove } from '@material-ui/icons';
import { mobile } from '../resp';
import {useLocation} from 'react-router-dom';
import { publicRequets } from '../requestMethod';
import { addProduct } from '../redux/cartRedux';
import { useDispatch } from 'react-redux';
import axios from 'axios';
const Container = Styled.div``;
const Wrapper = Styled.div`
padding:50px;
display:flex;
align-items:center; 
justify-content:space-between;
${mobile({padding:"10px",flexDirection:"column"})}
`;
const ImageContainer = Styled.div`
flex:1;
`;
const Image = Styled.img`
width:100%;
height:90vh;
object-fit:cover;
${mobile({height:"40%"})}
`;
const Title = Styled.h1`
font-weight:200;
`;
const InfoContainer = Styled.div`
flex:1;
padding:0px 50px;
${mobile({padding:"10px"})}
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
${mobile({width:"100%"})}
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
${mobile({width:"100%"})} 
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
  const location = useLocation()
  const id = location.pathname.split('/')[2];
  console.log(id);
  const [product,setProduct] = useState({});
  const [quantity,setQuantity] = useState(1);
  const [color,setColor] = useState('');
  const [size,setSize] = useState('');
  const dispatch = useDispatch();
  const handleClick = (type)=>{
if(type === 'dec'){
 quantity > 1 && setQuantity(quantity - 1);
}else{
setQuantity(quantity + 1);
}
  }
  const addCart = ()=>{
    dispatch(addProduct({...product,quantity,color,size}))
  }
  useEffect(()=>{
    const getProd = async()=>{
    try
    {
      const url = `http://localhost:8000/api/v1/product/${id}`
    const resp = await axios.get(url);
    setProduct(resp.data);
    }catch(err){
    console.log(err);
    }
    }
    getProd();
      },[id])
  return (
    <Container>
       <Announcements />
       <Navabar />
       <Wrapper>
<ImageContainer>
    <Image src={product.img}>
    </Image>
</ImageContainer>
<InfoContainer>
<Title>
{product.title}
</Title> 
<Description>
{product.desc}
</Description>
<Price>
    {product.price}
</Price>
<FilterContainer>
    <Filter>
        <FilterTitle>
          Color
        </FilterTitle>
        {product.color?.map((c)=>(
       <FilterColor color={c} key={c} onClick={()=>setColor(c)}/>
    ))}
    </Filter>
    <Filter>
    <FilterTitle>
        Size
        </FilterTitle>
        <FilterSize onChange={(e)=>setSize(e.target.value)}>
    {product.size?.map((s)=>(
      <FilterSizeOption key={s}>{s}</FilterSizeOption> 
    ))}
       
        </FilterSize>
    </Filter>
</FilterContainer>
<AddContainer>
<AmountContainer>
<Remove onClick={()=>handleClick('dec')}/>
<Amount>{quantity}</Amount>
<Add onClick={()=>handleClick('inc')}/>
</AmountContainer>
<Button onClick={()=>addCart()}>ADD TO CART</Button>
</AddContainer>
</InfoContainer>
       </Wrapper>
       <Newsletter />
       <Footer />
    </Container>
  )
}

export default Product