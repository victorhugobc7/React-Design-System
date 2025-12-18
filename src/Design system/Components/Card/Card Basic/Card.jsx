function Card({width = "auto", height = "auto", children, className}){
    return(
        <div className={`card ${className || ''}`} style={{ width: width, height: height }}> {children} </div>
    )
}

export default Card