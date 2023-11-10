import Banner from '../../components/Banner';
import Collapse from '../../components/Collapse';

function About() {
  return (
    <div className='Body'>
      <Banner page="About"/>
      <div className='DetailContainer'>
        <Collapse label="Fiabilité">
          <div className='TextDiv'>
            <p className='Text'>Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes.</p>
          </div>
        </Collapse>
        <Collapse label="Respect">
          <div className='TextDiv'>
            <p className='Text'>La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.</p>
          </div>
        </Collapse>
        <Collapse label="Service">
          <div className='TextDiv'><p className='Text'>La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.</p></div>
        </Collapse>
        <Collapse label="Sécurité">
          <div className='TextDiv'><p className='Text'>La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.</p></div>
        </Collapse>
      </div>
    </div>
    
  );
}

export default About
