import Card from '../Components/Card'
import listAppart from '../Data/listAppart.json'

function Page() {
  return (
    <div className="CardsContainer">
      {listAppart.map((data, index) => (
        <Card
          key={data.id}
          title={data.title}
          cover={data.cover}
          pictures={data.pictures}
          description={data.description}
          name={data.name}
          hostPic={data.picture}
          ratings={data.ratings}
          location={data.location}
          equipements={data.equipments}
          tags={data.tags}
        />
      ))}
    </div>
  )
}

export default Page
