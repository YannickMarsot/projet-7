import 'react-responsive-carousel/lib/styles/carousel.min.css'
import '../Utils/Style/PageTempo.css'
import { useParams } from 'react-router-dom'

function Page() {
  let params = useParams()

  return (
    // <div>
    //   {/* implementer Carousel */}
    //   <div id="titlesTagsAndLandLordWrapper">
    //     <div id="TitleAndTags">
    //       <h2 id="nameOfLocation">{params.title}</h2>
    //       <h4 id="location">{params.location}</h4>
    //       <ul alt="tags" id="tags">
    //         <li>{params.tags}</li>
    //       </ul>
    //     </div>
    //     <div id="landLordWrapper">
    //       <div id="nameAndPicWrapper">
    //         <p id="landLordName">{params.name}</p>
    //         <img src={params.picture} alt="profilePic" id="profilePic" />
    //       </div>
    //       <div id="ratings">{params.rating}</div>
    //     </div>
    //   </div>
    //   <div id="contents">
    //     <div className="contentWrapper">
    //       <h3 className="contentTitle">Descripton</h3>
    //       <p id="descriptionText">{params.description}</p>
    //     </div>
    //     <div className="contentWrapper">
    //       <h3 className="contentTitle">Equipements</h3>
    //       <ul id="listEquipements">{params.equipements}</ul>
    //     </div>
    //   </div>
    // </div>
    console.log(params.title)
  )
}

export default Page
