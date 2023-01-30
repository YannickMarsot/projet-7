import { useState } from 'react'
import '../Collapse/Collapse.css'

const Collapsible = (props) => {
  const [open, setOPen] = useState(false)
  const toggle = () => {
    setOPen(!open)
  }

  return (
    <div>
      <div className="subTitleWrapper">
        <h2 className="subTitle" onClick={toggle}>
          {props.label}
        </h2>
      </div>
      <div>{open && <div className="text">{props.children}</div>}</div>
    </div>
  )
}

export default Collapsible
