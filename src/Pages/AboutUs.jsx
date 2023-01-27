import banner from '../Assets/Banner/banner.png'
import Collapsible from '../Components/Collapse'
import '../Utils/Style/Style.css'
import '../Utils/Style/aboutUs.css'

function AboutUs() {
  return (
    //contenu de la page "About Us"
    <div id="bigWrapper">
      <div id="bannerWrapper">
        <img src={banner} alt="baniére" id="banner" />
      </div>
      <div id="bigTextWrapper">
        <nav>
          <div className="contentsWrapper">
            <Collapsible label="Fiabilité">
              <div className="TextWrapper">
                <p className="text">
                  Les annonces postées sur Kasa garantissent une fiabilité
                  totale. Les photos sont conformes aux logements, et toutes les
                  informations sont régulièrement vérifiées par nos équipes.
                </p>
              </div>
            </Collapsible>
          </div>
          <div className="contentsWrapper">
            <Collapsible label="Respect">
              <div className="TextWrapper">
                <p className="text">
                  La bienveillance fait partie des valeurs fondatrices de Kasa.
                  Tout comportement discriminatoire ou de perturbation du
                  voisinage entraînera une exclusion de notre plateforme.
                </p>
              </div>
            </Collapsible>
          </div>
          <div className="contentsWrapper">
            <Collapsible label="Service">
              <div className="TextWrapper">
                <p className="text">
                  Nos équipes se tiennent à votre disposition pour vous fournir
                  une expérience parfaite. N'hésitez pas à nous contacter si
                  vous avez la moindre question.
                </p>
              </div>
            </Collapsible>
          </div>
          <div className="contentsWrapper">
            <Collapsible label="Securité">
              <div className="TextWrapper">
                <p className="text">
                  La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes
                  que pour les voyageurs, chaque logement correspond aux
                  critères de sécurité établis par nos services. En laissant une
                  note aussi bien à l'hôte qu'au locataire, cela permet à nos
                  équipes de vérifier que les standards sont bien respectés.
                  Nous organisons également des ateliers sur la sécurité
                  domestique pour nos hôtes.
                </p>
              </div>
            </Collapsible>
          </div>
        </nav>
      </div>
    </div>
  )
}

export default AboutUs
