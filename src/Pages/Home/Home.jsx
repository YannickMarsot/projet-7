import DisplayCardHome from '../../Components/Home/displayCardHome'
import listAppart from '../../Data/listAppart.json'
// import CardHome from '../Components/CardHome'
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
      <div id="ContentWrapper">
        <DisplayCardHome data={listAppart} />
      </div>
    </div>
  )
}

export default Home
