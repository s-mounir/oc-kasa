import styled from 'styled-components';
import { Link } from 'react-router-dom'

import Card from '../components/Card';
import Banner from '../components/Banner';
//import { useFetch } from '../utils/hooks';
import flatList from '../datas/flatList.json'

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
  //const { data, isLoading, error } = useFetch('../datas/flatList.json')
  //const flatList = data?.flatList

  return (
    <Body>
      <Banner page="Homepage"/>
      <CardsContainer>
        {flatList?.map((flat) => (
          <Link key={`flat-${flat.id}`} to={`/logement/${flat.id}`}>
            <Card
              picture={flat.cover}
              title={flat.title}
              id={flat.id}
            />
          </Link>
          
        ))}
      </CardsContainer>
    </Body>
  );
}

export default Home