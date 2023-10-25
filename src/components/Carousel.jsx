import { useState } from "react"

function Carousel(props){
    const nbImages = props.images.length
    console.log(nbImages)

    const [count, setCount] = useState(0);
    function previous(){
        if(count===0){
            setCount(nbImages-1)
        }else{
            setCount(count-1)
        }
    }
    function next(){
        if(count===nbImages-1){
            setCount(0)
        }else{
            setCount(count+1)
        }
    }

    if(nbImages <= 1) return <img src={props.images[0]} alt="flat"/>

    return (
        <div>
            <button onClick={() => previous()}> previous </button>
            <p>{count}</p>
            {/* <img src={props.images[0]} alt="flat"/> */}
            <button onClick={() => next()}> next </button>
        </div>
    )
}

export default Carousel