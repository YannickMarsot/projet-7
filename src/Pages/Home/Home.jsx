import DisplayCardHome from '../../Components/DisplayCardHome/displayCardHome'
//import listAppart from '../../Data/listAppart.json'
import IMG from '../../Assets/Banner/IMG.png'
import { useEffect, useState } from 'react'
import '../../Utils/Style/Style.css'
import '../Home/Home.css'

//fonction pour afficher le contenu de la page home
function Home() {
  const [listApparts, setListApparts] = useState([])

  useEffect(() => {
    fetch('http://localhost:3000/listAppart.json')
      .then((response) => response.json())
      .then((data) => setListApparts(data))
  }, [])
  return (
    <div id="BigWrapper">
      <div id="BannerWrapper">
        <img src={IMG} alt="Banner" id="IMG" />
        <p id="textBanner">Chez vous, partout et ailleurs</p>
      </div>
      <div id="ContentWrapper">
        <DisplayCardHome data={listApparts} />
      </div>
    </div>
  )
}

export default Home
