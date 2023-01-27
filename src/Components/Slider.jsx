function Slider(props) {
  return props.data.map((content) => {
    return <img src={content} alt="SliderImg" />
  })
}

export default Slider
