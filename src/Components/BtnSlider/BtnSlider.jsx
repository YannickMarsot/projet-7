import leftArrow from '../../Assets/Arrows/left.png'
import rightArrow from '../../Assets/Arrows/right.png'

function BtnSlider({ direction, moveSlide }) {
  return (
    <button
      onClick={moveSlide}
      className={direction === 'next' ? 'btn-slide next' : 'btn-slide prev'}
    >
      <img
        src={direction === 'next' ? rightArrow : leftArrow}
        alt="btn-arrow"
      />
    </button>
  )
}

export default BtnSlider
