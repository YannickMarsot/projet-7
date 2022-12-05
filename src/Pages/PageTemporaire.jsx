import { Carousel } from 'react-responsive-carousel'

function PageTempo() {
  return (
    <div>
      <Carousel>
        <div>objet1</div>
        <div>objet2</div>
        <div>objet3</div>
        <div>objet4</div>
      </Carousel>
      <div id="titresAndTags">
        <h2>title</h2>
        <h3>location</h3>
        <ul alt="tags">
          <li></li>
          <li></li>
          <li></li>
        </ul>
        <div id="tennants">
          <p>name</p>
          <img src="#" alt="profilePic" />
          <p>ratings</p>
        </div>
        <div id="contents">
          <div>
            <h4>Descripton</h4>
            <p>texte</p>
          </div>
          <div>
            <h4>Equipements</h4>
            <p>texte</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PageTempo
