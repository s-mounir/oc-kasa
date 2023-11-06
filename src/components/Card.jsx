import PropTypes from 'prop-types'
import styled from 'styled-components'

const CardThumb = styled.div`
    width: 22vw;
    height: 22vw;
    position: relative;

    @media (max-width: 768px){
        width: 90vw;
        height: 60vw;
      }
`

const CardImage = styled.img`
    width: 100%;
    height: 100%;
    border-radius: 10px;
    object-fit: cover;
    z-index: 1;
    position: absolute;
`

const CardShadow = styled.div`
    width: 100%;
    height: 100%;
    position: absolute;
    background: linear-gradient(0deg, rgba(0,0,0,1) 0%, rgba(255,255,255,0) 100%);
    z-index: 2;
    border-radius: 10px;
`

const CardTitle = styled.span`
    color: #FFFFFF;
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 142.6%;
    position: absolute;
    bottom: 5.88%;
    left: 5.88%;
    z-index: 3;
`

function Card({ title, picture, id }) {
    return (
        <CardThumb>
                <CardImage src={picture} alt="flat image" />
                <CardShadow></CardShadow>
                <CardTitle>{title}</CardTitle>
        </CardThumb>
    )
}
 
Card.propTypes = {
    title: PropTypes.string,
    picture: PropTypes.string,
}

export default Card