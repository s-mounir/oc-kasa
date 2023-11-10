import { useParams } from 'react-router-dom'

import { useFetch } from '../../utils/hooks';
import Collapse from '../../components/Collapse';
import Carousel from '../../components/Carousel';
import Star from '../../components/Star';
import Error from '../Error'

function Flat() {
  const { flatNumber } = useParams()
  const { data, isLoading, error } = useFetch('/flatList.json')
  const flatData = data

  if (isLoading) {
    return (<div className='LoaderWrapper'>
    <div className='Loader' />
  </div>)}
  else if(error){return <div>Il y a un problème avec les données</div>}

  const flat = flatData.find((data) => data.id === flatNumber);
  if(!flat){
    return <Error />
  }

  return (
    <div className='Body'>
      <Carousel images={flat.pictures}/>
      <div className='InfoContainer'>
        <div>
          <h1 className='FlatTitle'> {flat.title} </h1>
          <h2 className='FlatCity'> {flat.location} </h2>
          {flat.tags.map((tag) => (<div  className='FlatTag' key={tag}>{tag}</div>))}
        </div>
        <div className='FlatDiv'>
          <div className='HostDiv'>
            <p className='HostName'>{flat.host.name}</p>
            <img className='HostImg' src={flat.host.picture} alt="host's profile" />
          </div>
          <Star rating={flat.rating}/>
        </div>
      </div>
      <div className='FlatDetailContainer'>
        <Collapse label="Description">
          <div className='Dropdown'>
            <p>{flat.description}</p>
          </div>
        </Collapse>
        <Collapse label="Equipements">
          <div className='Dropdown'>
            <ul className='ListUl'>
              {flat.equipments.map((equipment) => (<li className='ListLi' key={equipment}>{equipment}</li>))}
            </ul>
          </div>
        </Collapse>
      </div>
    </div>
  );
}

export default Flat