// import CardHome from '../Components/CardHome'
import listAppart from '../Data/listAppart.json'

function DisplayCardHome() {
  listAppart.forEach((element) => {
    return (
      // <div className="cardHomeContainer">
      //   <CardHome title={element.title} cover={element.cover} id={element.id} />
      // </div>
      console.log(element)
      // <p>coucou</p>
    )
  })
}

export default DisplayCardHome
