import { useState } from "react"


function Carousel(props){
    const nbImages = props.images.length

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

    if(nbImages <= 1) return <div className="CarouselContainer"><img className="CarouselImg" src={props.images[0]} alt="flat"/></div>

    return (
        <div className="CarouselContainer">
            <button className="PreviousBtn" onClick={() => previous()}><svg xmlns="http://www.w3.org/2000/svg" height="1em" fill="#FFF" viewBox="0 0 320 512" aria-label="Previous button"><path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z"/></svg></button>
            <img className="CarouselImg" src={props.images[count]} alt="different pictures of the flat"/>
            <p className="CarouselNum">{count+1}/{nbImages}</p>
            <button className="NextBtn" onClick={() => next()}><svg xmlns="http://www.w3.org/2000/svg" height="1em"  fill="#FFF" viewBox="0 0 320 512" aria-label="next button"><path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"/></svg></button>
        </div>
    )
}

export default Carousel