import CardHome from '../Components/CardHome'
import listAppart from '../Data/listAppart.json'

function DisplayCardHome() {
  return (
    <div className="cardHomeContainer">
      {listAppart.map((data, index) => [
        <CardHome
          key={data.id + index}
          title={data.title}
          cover={data.cover}
          id={data.id}
        />,
        console.log(data.id),
        <p>coucou</p>,
      ])}
    </div>
  )
}

export default DisplayCardHome
