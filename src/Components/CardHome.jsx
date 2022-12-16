import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

function CardHome(title, cover, id, key) {
  return (
    <Link to={`home/${id}`} id={key}>
      <div className="cardHomeWrapper">
        <img src={cover} alt="cover"></img>
        <p>{title}</p>
      </div>
    </Link>
    //console.log('coucou')
  )
}

CardHome.propTypes = {
  title: PropTypes.string.isRequired,
  cover: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
}

CardHome.defaultProps = {
  title: 'titre par default',
  cover: 'C:/Users/Yannm/Desktop/projet-7/src/Assets/Banner/IMG.png',
  id: '*',
  //mettre "DefaultCover"
}

export default CardHome
