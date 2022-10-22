import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

function CardHome(title, cover, id, key) {
  return (
    <Link to={`home/${id}`}>
      <div className="cardHomeWrapper" key={key}>
        <img src={cover} alt="cover"></img>
        <p>{title}</p>
      </div>
    </Link>
  )
}

CardHome.propTypes = {
  title: PropTypes.string.isRequired,
  cover: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
}

CardHome.defaultProps = {
  title: '',
  cover: '',
  id: '*',
  //mettre "DefaultCover"
}

export default CardHome
