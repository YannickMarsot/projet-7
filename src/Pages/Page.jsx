/* eslint-disable no-lone-blocks */
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import '../Utils/Style/PageTempo.css'
import { useParams, useNavigate, Navigate } from 'react-router-dom'
import listAppart from '../Data/listAppart.json'

function Page() {
  const params = useParams()
  const navigate = useNavigate()
  let id = params.id
  // console.log(id)
  {
    listAppart.map((content) => {
      if (content.id === id) {
        console.log(content.id)
        return null
      } else {
        navigate('/*')
        //envoie l'utilisateur à la page d'erreur
      }
    })
  }
}

export default Page
