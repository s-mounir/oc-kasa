import { useParams } from 'react-router-dom'
import flatList from '../datas/flatList.json'
import Collapse from '../components/Collapse';
import Error from './Error';

function Flat() {
  const { flatNumber } = useParams()
  const flat = flatList.find((data) => data.id === flatNumber);

  console.log(flat)

  if (!flat) return <Error />;

  return (
    <div className="App">
      <h1> {flat.title} </h1>
      <h2> {flat.location} </h2>
      {flat.tags.map((tag) => (<div>{tag}</div>))}
      <Collapse label="Description">
          <div>
            <p>{flat.description}</p>
          </div>
        </Collapse>
        <Collapse label="Equipements">
          <div>
            <p>{flat.equipments}</p>
          </div>
        </Collapse>
    </div>
  );
}

export default Flat