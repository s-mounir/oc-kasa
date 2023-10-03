import { useParams } from 'react-router-dom'

function Flat() {
  const { flatNumber } = useParams()

  return (
    <div className="App">
      <h1>Logement {flatNumber} </h1>
    </div>
  );
}

export default Flat