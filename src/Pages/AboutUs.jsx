import banner from '../Assets/Banner/banner.png'
import '../Utils/Style/Style.css'
import '../Utils/Style/aboutUs.css'

function AboutUs() {
  return (
    <div id="contentsWrapper">
      <div id="bannerWrapper">
        <img src={banner} alt="baniére" id="banner" />
      </div>
      <div id="textWrapper">
        <div className="rectangle1">
          <div className="rectangle2">
            <h2 className="AboutUsSubTitle">Fiabilité</h2>
          </div>
          <div className="rectangle3">
            <p className="text">
              Les annonces postées sur Kasa garantissent une fiabilité totale.
              Les photos sont conformes aux logements, et toutes les
              informations sont régulièrement vérifiées par nos équipes.
            </p>
          </div>
        </div>
        <div className="rectangle1">
          <div className="rectangle2">
            <h2 className="AboutUsSubTitle">Respect</h2>
          </div>
          <div className="rectangle3">
            <p className="text">
              La bienveillance fait partie des valeurs fondatrices de Kasa. Tout
              comportement discriminatoire ou de perturbation du voisinage
              entraînera une exclusion de notre plateforme.
            </p>
          </div>
        </div>
        <div className="rectangle1">
          <div className="rectangle2">
            <h2 className="AboutUsSubTitle">Service</h2>
          </div>
          <div className="rectangle3">
            <p className="text">
              Nos équipes se tiennent à votre disposition pour vous fournir une
              expérience parfaite. N'hésitez pas à nous contacter si vous avez
              la moindre question.
            </p>
          </div>
        </div>
        <div className="rectangle1">
          <div className="rectangle2">
            <h2 className="AboutUsSubTitle">Securité</h2>
          </div>
          <div className="rectangle3">
            <p className="text">
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
