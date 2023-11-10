import PropTypes from 'prop-types'


function Card({ title, picture, id }) {
    return (
        <div className='CardThumb'>
                <img className='CardImage' src={picture} alt="flat" />
                <div className='CardShadow' ></div>
                <span className='CardTitle' >{title}</span>
        </div>
    )
}
 
Card.propTypes = {
    title: PropTypes.string,
    picture: PropTypes.string,
}

export default Card