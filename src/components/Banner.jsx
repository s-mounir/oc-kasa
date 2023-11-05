import styled from 'styled-components'
import banner_about from "../assets/banner_about.png";
import banner_homepage from "../assets/banner_homepage.png";

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

const BannerText = styled.p`
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 500;
  font-size: 48px;
  line-height: 142.6%;
  color: #FFFFFF;
`

function Banner(props){
    const banner = props.page === "About" ? banner_about : banner_homepage;
    const text = props.page === "Homepage" ? true : false;

    return (
        <BannerDiv>
            <BannerImg src={banner} alt="Banner image"/>
            <BannerShadow></BannerShadow>
            {text && <BannerText>Chez vous, partout et ailleurs</BannerText>}
        </BannerDiv>
    )
}

export default Banner