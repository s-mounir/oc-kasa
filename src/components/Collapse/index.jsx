import { useState } from 'react'



function Collapse(props){
  const [open, setOpen] = useState(false);
  function toggle(){
    setOpen(!open);
  }
    return (
        <div>
            <button onClick={toggle}>{props.label}</button>
            {open && <div>{props.children}</div>}
        </div>
    )
}

export default Collapse