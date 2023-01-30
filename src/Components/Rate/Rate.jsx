import fullStar from '../../Assets/Stars/fullStar.png'
import emptyStar from '../../Assets/Stars/emptyStar.png'
import '../Rate/Rate.css'

function Rate({ score }) {
  const stars = [1, 2, 3, 4, 5]
  return (
    <div className="rate-comp">
      {stars.map((level) =>
        score >= level ? (
          <img
            key={level.toString()}
            className="star"
            src={fullStar}
            alt="rating star"
          />
        ) : (
          <img
            key={level.toString()}
            className="star"
            src={emptyStar}
            alt="rating star"
          />
        )
      )}
    </div>
  )
}

export default Rate
