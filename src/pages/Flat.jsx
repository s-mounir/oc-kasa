import { useParams } from 'react-router-dom'
import styled, { keyframes } from 'styled-components'

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

const LoaderWrapper = styled.div`
  display: flex;
  justify-content: center;
`

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`

const Loader = styled.div`
  padding: 10px;
  border: 6px solid #FF6060;
  border-bottom-color: transparent;
  border-radius: 22px;
  animation: ${rotate} 1s infinite linear;
  height: 0;
  width: 0;
`

const InfoContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`

const FlatTitle = styled.h1`
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 500;
  font-size: 36px;
  line-height: 142.6%;
  color: #FF6060;
  margin-top: 0;
  margin-bottom: 0;
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

const FlatDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

const HostDiv = styled.div`
  display: flex;
  gap: 20px;
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

const ListUl = styled.ul`
  margin: 0;
  padding: 0;
`

const ListLi = styled.li`
  list-style-type: none;
  padding: 0;
  margin: 0;
`

function Flat() {
  const { flatNumber } = useParams()
  const { data, isLoading, error } = useFetch('/flatList.json')
  const flatData = data

  if (isLoading) {
    return (<LoaderWrapper>
    <Loader />
  </LoaderWrapper>)}
  else if(error){return <div>Il y a un problème avec les données</div>}

  const flat = flatData.find((data) => data.id === flatNumber);
  return (
    <Body>
      <Carousel images={flat.pictures}/>
      <InfoContainer>
        <div>
          <FlatTitle> {flat.title} </FlatTitle>
          <FlatCity> {flat.location} </FlatCity>
          {flat.tags.map((tag) => (<FlatTag key={tag}>{tag}</FlatTag>))}
        </div>
        <FlatDiv>
          <HostDiv>
            <HostName>{flat.host.name}</HostName>
            <HostImg src={flat.host.picture} alt="host's profile picture" />
          </HostDiv>
          <Star rating={flat.rating}/>
        </FlatDiv>
      </InfoContainer>
      <DetailContainer>
        <Collapse label="Description">
          <Dropdown>
            <p>{flat.description}</p>
          </Dropdown>
        </Collapse>
        <Collapse label="Equipements">
          <Dropdown>
            <ListUl>
              {flat.equipments.map((equipment) => (<ListLi key={equipment}>{equipment}</ListLi>))}
            </ListUl>
          </Dropdown>
        </Collapse>
      </DetailContainer>
    </Body>
  );
}

export default Flat