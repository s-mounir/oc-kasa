import PropTypes from 'prop-types'
import styled from 'styled-components'

const CardTitle = styled.span`
    color: #5843e4;
    font-size: 22px;
    font-weight: bold;
`
const CardImage = styled.img`
    height: 80px;
    width: 80px;
    border-radius: 50%;
`

function Card({ title, picture }) {
    return (
        <div>
            <CardImage src={picture} alt="flat" />
            <CardTitle>{title}</CardTitle>
        </div>
    )
}
 
Card.propTypes = {
    title: PropTypes.string,
    picture: PropTypes.string,
}

export default Card