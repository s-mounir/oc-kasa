import flatList from '../../datas/flatList';
import Card from '../../components/Card';
import styled from 'styled-components';
import banner from "../../assets/banner_homepage.png";

const Body = styled.div`
  margin: 50px 100px;
  display: flex;
  flex-direction: column;
  gap: 40px;
`

const Banner = styled.div`
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

const CardsContainer = styled.div`
  background-color: #F7F7F7;
  border-radius: 25px;
  padding: 50px;

  display: grid;
  gap: 24px;
  grid-template-columns: repeat(3, 1fr);
`

function Home() {
  return (
    <Body>
      <Banner>
        <BannerImg src={banner}/>
        <BannerShadow></BannerShadow>
        <BannerText>Chez vous, partout et ailleurs</BannerText>
      </Banner>
      <CardsContainer>
        {flatList.map((flat) => (
          <Card key={`${flat.id}`}
            picture={flat.pictures[0]}
            title={flat.title}
          />
        ))}
      </CardsContainer>
    </Body>
  );
}

export default Home