import { Link } from 'react-router-dom'

function Error(){
    return (
        <div className='Errordiv'>
            <h1 className='Error404'>404</h1>
            <h2 className='ErrorText'>Oups! La page que vous demandez n'existe pas.</h2>
            <Link className='StyledLink' to="/">Retourner sur la page d’accueil</Link>
        </div>
    )
}

export default Error