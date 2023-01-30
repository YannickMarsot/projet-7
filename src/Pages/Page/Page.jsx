import { useParams, useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import listAppart from '../../Data/listAppart.json'
import Slider from '../../Components/Slider/Slider'
import Equipements from '../../Components/Equipements/Equipements'
import Collapsible from '../../Components/Collapse/Collapse'
import Rate from '../../Components/Rate/Rate'
import Tags from '../../Components/Tags/Tags'
import '../Page/Page.css'

function Page() {
  const params = useParams()
  const navigate = useNavigate()
  const [chosenAppart, setChosenAppart] = useState()
  useEffect(() => {
    const getAppart = async () => {
      const chosenOne = listAppart.find(({ id }) => id === params.id)
      //on récupére l'appart correspondant à l'id en parametre URL
      listAppart.map(() => setChosenAppart(chosenOne))
      if (chosenOne === undefined) {
        navigate('/*') //envoie l'utilisateur à la page d'erreur si l'appart ne correspond pas au parametre URL
      }
    }
    getAppart()
    // eslint-disable-next-line
  }, []) //tableau vide pour lancer useEffect qu'une fois

  const pictures = chosenAppart && chosenAppart.pictures
  const tags = chosenAppart && chosenAppart.tags
  const equipments = chosenAppart && chosenAppart.equipments
  return (
    chosenAppart && (
      <div>
        <Slider data={pictures} />
        <div id="titlesTagsAndLandLordWrapper">
          <div id="TitleAndTags">
            <h2 id="nameOfLocation">{chosenAppart.title}</h2>
            <h4 id="location">{chosenAppart.location}</h4>
            <ul alt="tags" id="tags">
              <Tags data={tags} />
            </ul>
          </div>
          <div id="landLordWrapper">
            <div id="nameAndPicWrapper">
              <p id="landLordName">{chosenAppart.host.name}</p>
              <img
                src={chosenAppart.host.picture}
                alt="profilePic"
                id="profilePic"
              />
            </div>
            <Rate id="ratings" score={chosenAppart.rating} />
          </div>
        </div>
        <div id="contents">
          <div className="contentWrapper">
            <Collapsible label="Description">
              <p id="descriptionText">{chosenAppart.description}</p>
            </Collapsible>
          </div>
          <div className="contentWrapper">
            <Collapsible label="Equipements">
              <Equipements data={equipments} />
            </Collapsible>
          </div>
        </div>
      </div>
    )
  )
}

export default Page
