import { Link } from 'react-router-dom'
import Logo from '../Assets/logo/LOGO.png'
import '../Utils/Style/Header.css'

function Header() {
  return (
    <div className="headerWrapper">
      <div className="logoWrapper">
        <img src={Logo} alt="Kasa" id="logo" />
      </div>
      <div className="linksWrapper">
        <Link to="/">
          <p id="home">Accueil</p>
        </Link>
        <Link to="/AboutUs">
          <p id="aboutUs">A propos</p>
        </Link>
      </div>
    </div>
  )
}

export default Header
