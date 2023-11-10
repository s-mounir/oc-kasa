import { Link } from 'react-router-dom'

import Card from '../../components/Card';
import Banner from '../../components/Banner';
import { useFetch } from '../../utils/hooks';

function Home() {
  const { data, isLoading, error } = useFetch('/flatList.json')
  const flatList = data

  if (error) {return <div>Il y a un problème avec les données</div>}

  return (
    <div className='Body'>
      <Banner page="Homepage"/>
      <div className='CardsContainer'>
        {isLoading ? (
        <div className='LoaderWrapper'>
          <div className='Loader' />
        </div>
        ) : (
          flatList?.map((flat) => (
            <Link key={`flat-${flat.id}`} to={`/logement/${flat.id}`}>
              <Card
                picture={flat.cover}
                title={flat.title}
                id={flat.id}
              />
            </Link>
          ))
        )}
      </div>
    </div>
  );
}

export default Home