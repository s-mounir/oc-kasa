function Star(props){
    const rating = props.rating
    const range = [1, 2, 3, 4, 5]

    return (
        <div>
            {range.map((rangeElem) =>
                rating >= rangeElem ? <span key={rangeElem.toString()}>☀️</span> : <span key={rangeElem.toString()}>💧</span>
            )}
        </div>
    )
}
export default Star