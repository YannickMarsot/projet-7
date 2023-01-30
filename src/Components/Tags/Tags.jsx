import '../Tags/Tags.css'

function Tags(props) {
  return props.data.map((content, index) => {
    return (
      <li className="tagsWrapper" key={index}>
        <p className="tagsText">{content}</p>
      </li>
    )
  })
}

export default Tags
