import { useParams, useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import listAppart from '../Data/listAppart.json'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import '../Utils/Style/PageTempo.css'

function Page() {
  const params = useParams()
  const navigate = useNavigate()
  const [chosenAppart, setChosenAppart] = useState()
  useEffect(() => {
    const getAppart = async () => {
      const chosenOne = listAppart.find(({ id }) => id === params.id)
      //on récupére l'appart correspondant à l'id en parametre URL
      //console.log(chosenOne)
      listAppart.map(() => setChosenAppart(chosenOne))
      if (chosenOne === undefined) {
        navigate('/*') //envoie l'utilisateur à la page d'erreur si l'appart ne correspond pas au parametre URL
      }
    }
    getAppart()
    // eslint-disable-next-line
  }, []) //tableau vide pour lancer useEffect qu'une fois
  console.log(chosenAppart)
}

export default Page
