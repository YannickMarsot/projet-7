import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'

function PageTempo() {
  return (
    <div>
      <Carousel>
        <div>
          <img
            alt="test"
            src="https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-20-1.jpg"
          />
          <p className="legend">Legend 1</p>
        </div>
        <div>
          <img
            alt="test"
            src="https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-20-2.jpg"
          />
          <p className="legend">Legend 2</p>
        </div>
        <div>
          <img
            alt="test"
            src="https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-20-3.jpg"
          />
          <p className="legend">Legend 3</p>
        </div>
      </Carousel>
      <div id="titresAndTags">
        <h2>title</h2>
        <h3>location</h3>
        <ul alt="tags">
          <li></li>
          <li></li>
          <li></li>
        </ul>
        <div id="tennants">
          <p>name</p>
          <img src="#" alt="profilePic" />
          <p>ratings</p>
        </div>
        <div id="contents">
          <div>
            <h4>Descripton</h4>
            <p>texte</p>
          </div>
          <div>
            <h4>Equipements</h4>
            <p>texte</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PageTempo
