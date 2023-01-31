import { Link } from 'react-router-dom'
import '../Error/Error.css'

function Error() {
  return (
    <div className="elementsWrapper">
      <h1 id="ErrorTitle">404</h1>
      <h2 id="ErrorText">Oups! Cette page que vous demandez n'existe pas.</h2>
      <Link to="/">
        <p className="LinkError">Retourner sur la page d'Accueil</p>
      </Link>
    </div>
  )
}

export default Error
