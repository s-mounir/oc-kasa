import styled from 'styled-components'
import banner from "../../assets/banner_about.png";

const BannerDiv = styled.div`
  height: 223px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
`

const BannerImg = styled.img`
  height: 100%;
  width: 100%;
  position: absolute;
  z-index: -2;
  border-radius: 25px;
  object-fit: cover;
`

const BannerShadow = styled.div`
  width: 100%;
  height: 100%;
  background-color: #000000;
  opacity: 0.3;
  border-radius: 25px;
  position: absolute;
  z-index: -1;
`

function Banner(){
    return (
        <BannerDiv>
            <BannerImg src={banner} alt=""/>
            <BannerShadow></BannerShadow>
        </BannerDiv>
    )
}

export default Banner