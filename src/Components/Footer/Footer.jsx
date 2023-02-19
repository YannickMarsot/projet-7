import LogoFooter from '../../Assets/logo/LOGO_Footer.png'
import copyright from '../../Assets/logo/copyright.png'
import '../Footer/Footer.css'

function Footer() {
  return (
    <div id="FooterContainer">
      <img id="logoFooter" src={LogoFooter} alt="logo Footer" />
      <img id="copyright" src={copyright} alt="copyright" />
    </div>
  )
}

export default Footer
