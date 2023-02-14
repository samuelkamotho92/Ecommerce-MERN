import React, { useState } from 'react'
import Styled from 'styled-components'
import { ArrowLeftOutlined , ArrowRightOutlined} from '@material-ui/icons'
import slider1 from '../assets/Central supermarket.jpeg';
import slider2 from '../assets/central super.jpeg';
import slider3 from '../assets/central super2.jpeg';
import { sliderItems } from '../Data';
import { mobile } from '../resp';
const Container = Styled.div`
width:100%;
height:100vh;
display:flex;
background-color:white;
position:relative;
overflow:hidden;
${mobile({display:"none"})}
`
const Wrapper = Styled.div`
height:100%;
display:flex;
transition:all 1s ease-out ;
transform:translateX(${props=>props.sliderindex * -100}vw);
`
const Slide = Styled.div`
width:100vw;
height:100vh;
display:flex;
align-items:center;
background-color:${props=>props.bg}
`
const ImageContainer = Styled.div`
height:100%;
flex:1;
`
const InfoContainer = Styled.div`
flex:1;
padding:50px
`
const Image = Styled.img`
height:85%;
object-fit: fill;
`

const Title = Styled.h1`
font-size:70px;

`
const Description = Styled.h1`
font-size:20px;
margin:50px 0px;
font-weight:500;
letter-spacing:3px;

`;


const Button = Styled.button`
font-size:20px;
padding:5px;
background-color:transparent;
cursor:pointer;
`

const Arrow = Styled.div`
width:50px;
height:50px;
background-color:wheat;
border-radius:50%;
display:flex;
align-items:center;
justify-content:center;
position:absolute;
top:0;
bottom:0;
left:${props=>props.direction === 'left' && "10px"};
right:${props=>props.direction === 'right' && "10px"};
margin:auto;
cursor:pointer;
opacity:0.5;
z-index:2;
`



const Slider = () => {
    const [sliderindex,setsliderindex] = useState(0);
    const handleClick = (dir)=>{
    if(dir === 'left'){
setsliderindex(sliderindex > 0 ? sliderindex - 1 : 2)
    }else{
        setsliderindex(sliderindex < 2 ? sliderindex + 1: 0)
    }
    }
  return (
<Container>
<Arrow direction="left" onClick={()=>handleClick('left')}>
<ArrowLeftOutlined/>
</Arrow>
<Wrapper sliderindex={sliderindex}>
    {sliderItems.map(item=>(
            <Slide bg={item.bg}>
            <ImageContainer>
            <Image src={item.img}/>
        </ImageContainer>
        <InfoContainer>
            <Title>{item.title}</Title>
            <Description>{item.desc}</Description>
            <Button>ORDER ONLINE</Button>
        </InfoContainer>
            </Slide>
    ))}
</Wrapper>
<Arrow direction="right" onClick={()=>handleClick('right')}>
<ArrowRightOutlined/>
</Arrow>
    </Container>
  )
}

export default Slider