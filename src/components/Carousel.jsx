import { useState } from "react"
import styled from 'styled-components';

const CarouselContainer = styled.div`
  width: 100%;
  height: 415px;
  position: relative;
`

const CarouselImg = styled.img`
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: -2;
    object-fit: cover;
    border-radius: 25px;
`

const CarouselNum = styled.p`
    position: absolute;
    bottom: 6%;
    left: 49%;
    font-family: 'Montserrat';
    font-weight: 500;
    font-size: 18px;
    color: #FFFFFF;

    @media (max-width: 768px){
        display: none;
      }
`

const PreviousBtn = styled.button`
    position: absolute;
    left: 1%;
    top: calc(50% - 40px);
    font-size: 79px;
    border: none;
    background-color: transparent;

    @media (max-width: 768px){
        font-size: 30px;
        top: calc(50% - 15px);
      }
`

const NextBtn = styled.button`
    position: absolute;
    right: 1%;
    top: calc(50% - 40px);
    font-size: 79px;
    border: none;
    background-color: transparent;

    @media (max-width: 768px){
        font-size: 30px;
        top: calc(50% - 15px);
      }
`

function Carousel(props){
    const nbImages = props.images.length

    const [count, setCount] = useState(0);
    function previous(){
        if(count===0){
            setCount(nbImages-1)
        }else{
            setCount(count-1)
        }
    }
    function next(){
        if(count===nbImages-1){
            setCount(0)
        }else{
            setCount(count+1)
        }
    }

    if(nbImages <= 1) return <CarouselContainer><CarouselImg src={props.images[0]} alt="flat"/></CarouselContainer>

    return (
        <CarouselContainer>
            <PreviousBtn onClick={() => previous()}><svg xmlns="http://www.w3.org/2000/svg" height="1em" fill="#FFF" viewBox="0 0 320 512" aria-label="Previous button"><path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z"/></svg></PreviousBtn>
            <CarouselImg src={props.images[count]} alt="different pictures of the flat"/>
            <CarouselNum>{count+1}/{nbImages}</CarouselNum>
            <NextBtn onClick={() => next()}><svg xmlns="http://www.w3.org/2000/svg" height="1em"  fill="#FFF" viewBox="0 0 320 512" aria-label="next button"><path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"/></svg></NextBtn>
        </CarouselContainer>
    )
}

export default Carousel