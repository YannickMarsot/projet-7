import { useState } from 'react'

const Collapsible = (props) => {
  const [open, setOPen] = useState(false)
  const toggle = () => {
    setOPen(!open)
  }

  return (
    <div>
      <div>
        <button onClick={toggle}>{props.label}</button>
      </div>
      <div>{open && <div className="toggle">{props.children}</div>}</div>
    </div>
  )
}

export default Collapsible
