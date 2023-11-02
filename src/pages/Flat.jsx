import { useParams } from 'react-router-dom'
import styled from 'styled-components';

import { useFetch } from '../utils/hooks';
import Collapse from '../components/Collapse';
import Carousel from '../components/Carousel';
import Star from '../components/Star';

const Body = styled.div`
  margin: 50px 100px;
  display: flex;
  flex-direction: column;
  gap: 40px;
`

const InfoContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`

const FlatInfo = styled.div`
`

const FlatTitle = styled.h1`
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 500;
  font-size: 36px;
  line-height: 142.6%;
  color: #FF6060;
`

const FlatCity = styled.h2`
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 142.6%;
  color: #FF6060;
`

const FlatTag = styled.div`
  display: inline-block;
  background: #FF6060;
  border-radius: 10px;
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 142.6%;
  color: #FFFFFF;
  padding: 5px 10px;
  margin-right: 10px;
`

const HostImg = styled.img`
  height: 64px;
  width: 64px;
  border-radius: 32px;
`

const HostName = styled.p`
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 142.6%;
  color: #FF6060;
`

const DetailContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 76px;
`

const Dropdown = styled.div`
  background-color: #F7F7F7;
  border-radius: 0px 0px 5px 5px;
  padding: 15px;
  color: #FF6060;
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 142.6%;
`

const ListDropdown = styled.li`
  list-style-type: none;
  padding: 0;
  margin: 0;
`

function Flat() {
  const { flatNumber } = useParams()
  const { data, isLoading, error } = useFetch('/flatList.json')
  const flatData = data

  if (isLoading) {return <div>isLoading</div>}
  else if(error){return <div>Il y a un problème avec les données</div>}

  const flat = flatData.find((data) => data.id === flatNumber);
  return (
    <Body>
      <Carousel images={flat.pictures}/>
      <InfoContainer>
        <FlatInfo>
          <FlatTitle> {flat.title} </FlatTitle>
          <FlatCity> {flat.location} </FlatCity>
          {flat.tags.map((tag) => (<FlatTag>{tag}</FlatTag>))}
        </FlatInfo>
        <div>
          <HostName>{flat.host.name}</HostName>
          <HostImg src={flat.host.picture} alt="host" />
          <Star rating={flat.rating}/>
        </div>
      </InfoContainer>
      <DetailContainer>
        <Collapse label="Description">
          <Dropdown>
            <p>{flat.description}</p>
          </Dropdown>
        </Collapse>
        <Collapse label="Equipements">
          <Dropdown>
            <ul>
              {flat.equipments.map((equipment) => (<ListDropdown>{equipment}</ListDropdown>))}
            </ul>
          </Dropdown>
        </Collapse>
      </DetailContainer>
    </Body>
  );
}

export default Flat