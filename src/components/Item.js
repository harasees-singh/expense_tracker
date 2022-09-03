import './CSS/Item.css'
import { useState } from 'react'
import Card from './Card'
import DateDisplay from './DateDisplay'
function Item(props){
    
    return(
        <Card className="Item--container">
            <div className="Item--DateDisplay--container">
                <DateDisplay date={props.date} />
                <h3 className="Item--name">{props.name}</h3>
            </div>
            <div className="Item--price_container">
                <h1 className="Item--price">$ {props.price}.00</h1>
                {/* event listener */}
            </div>
        </Card>
    )
}
export default Item;