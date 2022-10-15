import PropTypes from 'prop-types'

function Card({
  title,
  cover,
  pictures,
  description,
  name,
  hostPic,
  ratings,
  location,
  equipements,
  tags,
}) {
  return (
    <div className="cardWrapper">
      <p className="title">{title}</p>
      <img src={cover} alt="cover" />
      <img src={pictures} alt="pictures" />
      <p className="description">{description}</p>
      <div className="host">
        <p className="name">{name}</p>
        <img src={hostPic} alt="hostPic" />
      </div>
      <span className="ratings">{ratings}</span>
      <p className="location">{location}</p>
      <p className="equipements">{equipements}</p>
      <p className="tags">{tags}</p>
    </div>
  )
}

Card.propTypes = {
  title: PropTypes.string.isRequired,
  cover: PropTypes.string.isRequired,
  pictures: PropTypes.array.isRequired,
  description: PropTypes.string.isRequired,
  hostName: PropTypes.string.isRequired,
  hostPic: PropTypes.string.isRequired,
  ratings: PropTypes.string.isRequired,
  equipements: PropTypes.array.isRequired,
  tags: PropTypes.array.isRequired,
}

Card.defaultProps = {
  title: '',
  cover: '',
  //mettre "DefaultCover"
  pictures: '',
  //mettre "DefaultPictures"
  description: '',
  hostName: '',
  hostPic: '',
  //mettre "DefaultHostPic"
  ratings: '',
  equipements: '',
  tags: '',
}

export default Card
