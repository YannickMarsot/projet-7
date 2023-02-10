import { useState } from 'react'
import BtnSlider from '../BtnSlider/BtnSlider'
import '../Slider/Slider.css'

function Slider(props) {
  const length = props.data.length // longueur du tableau de slides
  const [slideIndex, setSlideIndex] = useState(1)

  const nextSlide = () => {
    if (slideIndex !== length) {
      setSlideIndex(slideIndex + 1)
    } else if (slideIndex === length) {
      setSlideIndex(1)
    }
  }

  const prevSlide = () => {
    if (slideIndex !== 1) {
      setSlideIndex(slideIndex - 1)
    } else if (slideIndex === 1) {
      setSlideIndex(length)
    }
  }
  return (
    <div id="container-slider">
      {props.data.map((content, index) => {
        //console.log(content)
        //mettre if else pour affichage bouton si sup à  1 retourner ci dessous sinon retourner sans boutton
        if (length > 1) {
          return (
            <div key={index}>
              <div
                className={
                  slideIndex === index + 1 ? 'slide active-anim' : 'slide'
                }
              >
                <img src={content} alt="SliderImg" />
              </div>
              <BtnSlider moveSlide={nextSlide} direction={'next'} />
              <BtnSlider moveSlide={prevSlide} direction={'prev'} />
              {/* <span className="slider__number">
              {index + 1}/{length}
            </span> */}
            </div>
          )
        } else {
          return (
            <div key={index}>
              <div
                className={
                  slideIndex === index + 1 ? 'slide active-anim' : 'slide'
                }
              >
                <img src={content} alt="SliderImg" />
              </div>
              {/* <span className="slider__number">
                {index + 1}/{length}
              </span> */}
            </div>
          )
        }
      })}
    </div>
  )
}

export default Slider
