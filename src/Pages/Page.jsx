import { useParams, useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import listAppart from '../Data/listAppart.json'
import Slider from '../Components/Slider'
import Equipements from '../Components/Equipements'
import Collapsible from '../Components/Collapse'
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

  const pictures = chosenAppart && chosenAppart.pictures
  const tags = chosenAppart && chosenAppart.tags
  //console.log(tags)
  const equipments = chosenAppart && chosenAppart.equipments
  // const equipementsList = (equipments) =>
  //   chosenAppart &&
  //   equipments.maps((item, index) => (
  //     <li key={index} className="equipements_list">
  //       {item}
  //     </li>
  // ))
  return (
    chosenAppart && (
      <div>
        <Slider data={pictures} />
        <div id="titlesTagsAndLandLordWrapper">
          <div id="TitleAndTags">
            <h2 id="nameOfLocation">{chosenAppart.title}</h2>
            <h4 id="location">{chosenAppart.location}</h4>
            <ul alt="tags" id="tags">
              <li className="tagsContent">{tags}</li>
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
            <div id="ratings">{chosenAppart.rating}</div>
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
