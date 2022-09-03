import './CSS/DateDisplay.css'
function DateDisplay(props){
    const month = props.date.toLocaleString('en-US', { month: 'long' });
    const day = props.date.toLocaleString('en-US', { day: '2-digit' });
    const year = props.date.getFullYear();

    return(
        <div className="DateDisplay--container">
            <div className="DateDisplay--day">{day}</div>
            <div className="DateDisplay--month">{month}</div>
            <div className="DateDisplay--year">{year}</div>
        </div>
    )
}
export default DateDisplay;