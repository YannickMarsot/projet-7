import banner from '../Assets/Banner/banner.png'
import '../Utils/Style/GeneralStyle.css'
import '../Utils/Style/aboutUs.css'

function AboutUs() {
  return (
    <div id="contentsWrapper">
      <div id="bannerWrapper">
        <img src={banner} alt="baniére" id="banner" />
      </div>
      <div id="textWrapper">
        <div className="rectangle1">
          <div classname="rectangle2">
            <h3>Fiabilité</h3>
          </div>
          <div className="rectangle3">
            <p>
              Les annonces postées sur Kasa garantissent une fiabilité totale.
              Les photos sont conformes aux logements, et toutes les
              informations sont régulièrement vérifiées par nos équipes.
            </p>
          </div>
        </div>
        <div className="rectangle1">
          <div classname="rectangle2">
            <h3>Respect</h3>
          </div>
          <div className="rectangle3">
            <p>
              La bienveillance fait partie des valeurs fondatrices de Kasa. Tout
              comportement discriminatoire ou de perturbation du voisinage
              entraînera une exclusion de notre plateforme.
            </p>
          </div>
        </div>
        <div className="rectangle1">
          <div classname="rectangle2">
            <h3>Service</h3>
          </div>
          <div className="rectangle3">
            <p>
              Nos équipes se tiennent à votre disposition pour vous fournir une
              expérience parfaite. N'hésitez pas à nous contacter si vous avez
              la moindre question.
            </p>
          </div>
        </div>
        <div className="rectangle1">
          <div classname="rectangle2">
            <h3>Securité</h3>
          </div>
          <div className="rectangle3">
            <p>
              La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que
              pour les voyageurs, chaque logement correspond aux critères de
              sécurité établis par nos services. En laissant une note aussi bien
              à l'hôte qu'au locataire, cela permet à nos équipes de vérifier
              que les standards sont bien respectés. Nous organisons également
              des ateliers sur la sécurité domestique pour nos hôtes.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutUs
