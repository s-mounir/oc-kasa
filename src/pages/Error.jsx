import styled from 'styled-components'
import { Link } from 'react-router-dom'

const Errordiv = styled.div`
    height: 600px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;

    @media (max-width: 768px){
        margin: 5vw;
      }
`

const Error404 = styled.h1`
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 700;
    font-size: 288px;
    color: #FF6060;
    margin: 0;

    @media (max-width: 768px){
        font-size: 96px;
      }
`

const ErrorText = styled.h2`
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 500;
    font-size: 36px;
    line-height: 142.6%;
    color: #FF6060;
    margin: 0;
    text-align: center;

    @media (max-width: 768px){
        font-size: 18px;
        padding: 0 10vw;
      }
`

const StyledLink = styled(Link)`
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 142.6%;
    color: #FF6060;
    margin: 0;

    @media (max-width: 768px){
        font-size: 14px;
        padding: 0 10vw;
      }
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