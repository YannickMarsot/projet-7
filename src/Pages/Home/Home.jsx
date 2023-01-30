import DisplayCardHome from '../../Components/DisplayCardHome/displayCardHome'
import listAppart from '../../Data/listAppart.json'
import IMG from '../../Assets/Banner/IMG.png'
import '../../Utils/Style/Style.css'
import '../Home/Home.css'

//fonction pour afficher le contenu de la page home
function Home() {
  return (
    <div id="BigWrapper">
      <div id="BannerWrapper">
        <img src={IMG} alt="Banner" id="IMG" />
      </div>
      <p id="textBanner">Chez vous, partout et ailleurs</p>
      <div id="ContentWrapper">
        <DisplayCardHome data={listAppart} />
      </div>
    </div>
  )
}

export default Home
