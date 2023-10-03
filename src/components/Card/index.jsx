function Card({ title, picture }) {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', padding: 15 }}>
            <img src={picture} alt="flat" height={80} width={80} />
            <span>{title}</span>
        </div>
    )
}
 
export default Card