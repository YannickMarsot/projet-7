import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import '../DisplayCardHome/DisplayCardHome.css'

const DisplayCardHome = (props) => {
  return props.data.map((content, index) => (
    <Link className="cardHomeLink" to={`Page/${content.id}`} key={index}>
      <div className="CardHome">
        <h2 className="CardTitle">
          <p className="CardTitleText">{content.title}</p>
        </h2>
        <img src={content.cover} alt="cover" className="imgHome" />
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
