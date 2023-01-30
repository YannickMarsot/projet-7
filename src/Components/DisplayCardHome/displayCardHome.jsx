import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import '../DisplayCardHome/DisplayCardHome.css'

const DisplayCardHome = (props) => {
  return props.data.map((content, index) => (
    <Link className="cardHomeLink" to={`Page/${content.id}`}>
      <div className="cardHomeContainer">
        <div key={index} className="CardHome">
          <h2 className="CardTitle">{content.title}</h2>
          <img src={content.cover} alt="cover" className="imgHome" />
        </div>
      </div>
    </Link>
  ))
}

DisplayCardHome.propTypes = {
  title: PropTypes.string.isRequired,
  cover: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
}

DisplayCardHome.defaultProps = {
  title: 'titre par default',
  cover: 'C:/Users/Yannm/Desktop/projet-7/src/Assets/Banner/IMG.png',
  id: '*',
}

export default DisplayCardHome
