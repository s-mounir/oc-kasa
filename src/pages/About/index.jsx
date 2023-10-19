import styled from 'styled-components';
import Banner from '../../components/Banner';
import Collapse from '../../components/Collapse';

const Body = styled.div`
  margin: 0 100px;
  display: flex;
  flex-direction: column;
  gap: 40px;
`

const TextDiv = styled.div`
  background-color: #F7F7F7;
  border-radius: 0px 0px 5px 5px;
  margin: -20px 100px 15px 100px;
  padding: 15px;
`

const Text = styled.p`
  color: #FF6060;
  margin: 0;
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 142.6%;
`

function About() {
  return (
    <Body>
      <Banner page="About"/>
      <div>
        <Collapse label="Fiabilité">
          <TextDiv>
            <Text>Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes.</Text>
          </TextDiv>
        </Collapse>
        <Collapse label="Respect">
          <TextDiv>
            <Text>La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.</Text>
          </TextDiv>
        </Collapse>
        <Collapse label="Service">
          <TextDiv><Text>La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.</Text></TextDiv>
        </Collapse>
        <Collapse label="Sécurité">
          <TextDiv><Text>La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.</Text></TextDiv>
        </Collapse>
      </div>
    </Body>
    
  );
}

export default About
