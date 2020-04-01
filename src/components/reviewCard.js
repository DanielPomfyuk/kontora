import React from 'react'
import "../styles/review.css"
export default function ReviewCard(props) {
    return (
        <div className="reviewCard">
            <div className="imgBox">
                <img src={props.photo} alt={props.name}></img>
            </div>
            <div className="details">
                <h2>{props.name}</h2>
                <p>{props.text}</p>
            </div>
        </div>
    )
}
