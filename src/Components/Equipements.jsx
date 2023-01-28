import '../Utils/Style/Equipements.css'

function Equipements(props) {
  return props.data.map((content, index) => {
    return <li key={index}>{content}</li>
  })
}

export default Equipements
