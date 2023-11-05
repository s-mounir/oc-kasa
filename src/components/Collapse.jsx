import { useState } from 'react'
import styled from 'styled-components';

const TitleDiv = styled.div`
  background-color: #FF6060;
  border-radius: 5px;
  height: 52px;
  display: flex;
  align-items: center;
  padding: 0 30px;
  justify-content: space-between;
`
const Title = styled.h2`
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 142.6%;
  color: #FFFFFF;
`

const Arrow = styled.button`
  width: 32px;
  height: 32px;
  color: #FFFFFF;
  background-color: #FF6060;
  padding: 0;
  border: none;
`

function Collapse(props){
  const [open, setOpen] = useState(false);
  function toggle(){
    setOpen(!open);
  }
    return (
        <div>
          <TitleDiv>
            <Title>{props.label}</Title>
            <Arrow onClick={toggle}>
              {
                open ? <svg xmlns="http://www.w3.org/2000/svg" height="32" fill="#FFF" viewBox="0 0 512 512" aria-label='open dropdown'><path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"/></svg> : <svg xmlns="http://www.w3.org/2000/svg" height="32" fill="#FFF" viewBox="0 0 512 512" aria-label='close dropdown'><path d="M233.4 105.4c12.5-12.5 32.8-12.5 45.3 0l192 192c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L256 173.3 86.6 342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l192-192z"/></svg>
              }
            </Arrow>
          </TitleDiv>
          {open && <div>{props.children}</div>}
        </div>
    )
}

export default Collapse