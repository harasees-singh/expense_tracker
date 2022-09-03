import './CSS/Card.css'
function Card(props){
    const Class = props.className + ' card';
    return(
        <div className={Class}>
            {props.children}
        </div>
    )
}
export default Card