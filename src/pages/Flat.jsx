import { useParams } from 'react-router-dom'

import flatList from '../datas/flatList.json'
import Collapse from '../components/Collapse';
import Carousel from '../components/Carousel';
import Star from '../components/Star';
import Error from './Error';

function Flat() {
  const { flatNumber } = useParams()
  const flat = flatList.find((data) => data.id === flatNumber);

  console.log(flat)

  if (!flat) return <Error />;

  return (
    <div className="App">
      <Carousel images={flat.pictures}/>
      <h1> {flat.title} </h1>
      <h2> {flat.location} </h2>
      <div>
        <p>{flat.host.name}</p>
        <img src={flat.host.picture} alt="host" />
      </div>
      <Star rating={flat.rating}/>
      {flat.tags.map((tag) => (<div>{tag}</div>))}
      <Collapse label="Description">
          <div>
            <p>{flat.description}</p>
          </div>
        </Collapse>
        <Collapse label="Equipements">
          <div>
            <ul>
            {flat.equipments.map((equipment) => (<li>{equipment}</li>))}
            </ul>
          </div>
        </Collapse>
    </div>
  );
}

export default Flat