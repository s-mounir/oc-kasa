import flatList from '../datas/flatList';
import Card from '../components/Card';
import styled from 'styled-components';
import Banner from '../components/Banner';

const Body = styled.div`
  margin: 50px 100px;
  display: flex;
  flex-direction: column;
  gap: 40px;
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
      <Banner page="Homepage"/>
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