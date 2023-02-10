import logoFooter from '../../Assets/logo/LOGO_Footer.png'
import logoRight from '../../Assets/logo/All_Right_Reserved.png'

function Footer() {
  return (
    <div id="footerWrapper">
      <img src={logoFooter} alt="logo du footer" />
      <img src={logoRight} alt="droit d'auteur" />
    </div>
  )
}
export default Footer
