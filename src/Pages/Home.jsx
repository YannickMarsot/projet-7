import CardHome from '../Components/CardHome'
import listAppart from '../Data/listAppart.json'

function Home() {
  listAppart.forEach((element) => {
    return (
      <div className="cardHomeContainer">
        <CardHome title={element.title} cover={element.cover} id={element.id} />
      </div>
      //console.log(element.id)
      //<p>coucou</p>
    )
  })
}

// function Home() {
//   return (
//     <div className="cardHomeContainer">
//       {listAppart.map(
//         (data, index) => [
//           <CardHome
//             key={data.id + index}
//             title={data.title}
//             cover={data.cover}
//             id={data.id}
//           />,
//         ]
//         //<p>coucou</p>
//         //console.log(data.id)
//       )}
//     </div>
//   )
// }

export default Home
