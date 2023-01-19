import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
//import { withRouter } from 'react-router-dom'

const DisplayCardHome = (props, history) => {
  // const handleClick = () => {
  //   history.push(props)
  // }

  return (
    <div className="cardHomeContainer">
      {props.data.map((content) => (
        <Link
          to={`Page/${content.id}`}
          //onClick={handleClick}
        >
          <div className="CardHome">
            <h2 className="CardTitle">{content.title}</h2>
            <img src={content.cover} alt="cover" className="imgHome" />
          </div>
        </Link>
      ))}
    </div>
  )
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
  //mettre "DefaultCover"
}

//export default withRouter(DisplayCardHome)
export default DisplayCardHome
