import styled from 'styled-components'
import { Link } from 'react-router-dom'

const Errordiv = styled.div`
    height: 66vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
`

const Error404 = styled.h1`
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 700;
    font-size: 288px;
    color: #FF6060;
    margin: 0;
`

const ErrorText = styled.h2`
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 500;
    font-size: 36px;
    line-height: 142.6%;
    color: #FF6060;
    margin: 0;
`

const StyledLink = styled(Link)`
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 142.6%;
    color: #FF6060;
    margin: 0;
`

function Error(){
    return (
        <Errordiv>
            <Error404>404</Error404>
            <ErrorText>Oups! La page que vous demandez n'existe pas.</ErrorText>
            <StyledLink to="/">Retourner sur la page d’accueil</StyledLink>
        </Errordiv>
    )
}

export default Error