function Equipements(props) {
  return props.data.map((content, index) => {
    return <li key={index} src={content} alt="SliderImg" />
  })
}

export default Equipements
