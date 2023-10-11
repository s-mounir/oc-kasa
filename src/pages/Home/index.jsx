import flatList from '../../datas/flatList';
import Card from '../../components/Card';
import styled from 'styled-components'

const CardsContainer = styled.div`
    display: grid;
    gap: 24px;
    grid-template-columns: repeat(3, 1fr);
`

function Home() {
  return (
    <div className="App">
      <h1>Page d'accueil</h1>
      <CardsContainer>
        {flatList.map((flat) => (
        <Card key={`${flat.id}`}
          picture={flat.pictures[0]}
          title={flat.title}
        />
      ))}
      </CardsContainer>
    </div>
  );
}

export default Home