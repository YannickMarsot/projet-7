import { useState } from 'react'
import arrow from '../../Assets/Arrows/down.png'
import '../Collapse/Collapse.css'

const Collapsible = (props) => {
  const [open, setOPen] = useState(false)
  const toggle = () => {
    setOPen(!open)
  }

  return (
    <div className="backgroundWrapper">
      <div className="subTitleWrapper">
        <h2 className="subTitle" onClick={toggle}>
          {props.label}
          <span className={open ? 'arrow_reverse' : 'arrow'}>
            <img src={arrow} alt="arrow collapse" />
          </span>
        </h2>
      </div>
      <div>{open && <div className="text">{props.children}</div>}</div>
    </div>
  )
}

export default Collapsible
