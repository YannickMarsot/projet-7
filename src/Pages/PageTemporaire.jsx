import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import '../Utils/Style/PageTempo.css'

function PageTempo() {
  return (
    <div>
      <Carousel>
        <div className="CarouselImgWrapper">
          <img
            alt="test"
            src="https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-20-1.jpg"
          />
          <p className="legend">Legend 1</p>
        </div>
        <div className="CarouselImgWrapper">
          <img
            alt="test"
            src="https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-20-2.jpg"
          />
          <p className="legend">Legend 2</p>
        </div>
        <div className="CarouselImgWrapper">
          <img
            alt="test"
            src="https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-20-3.jpg"
          />
          <p className="legend">Legend 3</p>
        </div>
      </Carousel>
      <div id="titlesTagsAndLandLordWrapper">
        <div id="TitleAndTags">
          <h2 id="nameOfLocation">Cozy loft on the Canal Saint-Martin</h2>
          <h4 id="location">Paris, Île-de-France</h4>
          <ul alt="tags" id="tags">
            <li className="tagsContent">
              <p className="tagsText">Cozy</p>
            </li>
            <li className="tagsContent">
              <p className="tagsText">Canal</p>
            </li>
            <li className="tagsContent">
              <p className="tagsText">Paris10</p>
            </li>
          </ul>
        </div>
        <div id="landLordWrapper">
          <div id="nameAndPicWrapper">
            <p id="landLordName">Alexandre Dumas</p>
            <img
              src="https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/profile-picture-12.jpg"
              alt="profilePic"
              id="profilePic"
            />
          </div>
          <div id="ratings">
            <span>*</span>
            <span>*</span>
            <span>*</span>
            <span>*</span>
            <span>*</span>
          </div>
        </div>
      </div>
      <div id="contents">
        <div className="contentWrapper">
          <h3 className="contentTitle">Descripton</h3>
          <p id="descriptionText">
            Vous serez à 50m du canal Saint-martin où vous pourrez pique-niquer
            l'été et à côté de nombreux bars et restaurants. Au cœur de Paris
            avec 5 lignes de métro et de nombreux bus. Logement parfait pour les
            voyageurs en solo et les voyageurs d'affaires. Vous êtes à1 station
            de la gare de l'est (7 minutes à pied).{' '}
          </p>
        </div>
        <div className="contentWrapper">
          <h3 className="contentTitle">Equipements</h3>
          <ul id="listEquipements">
            <li>Climatisation</li>
            <li>Wi-Fi</li>
            <li>Cuisine</li>
            <li>Espace de travail</li>
            <li>Fer à repasser</li>
            <li>Sèche-cheveux</li>
            <li>Cintres</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default PageTempo
