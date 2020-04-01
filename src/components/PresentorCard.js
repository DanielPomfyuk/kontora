import React from 'react'
import "../styles/presentorCard.css"

export default function presentorCard(props) {
    return (
        <div className="presentorCard">
            <div className="face face1">
                <div className="content">
                    <img src={props.photo} alt={props.name}></img>
                    <div className="name">{props.name}</div>
                </div>
            </div>
            <div className="face face2">
                <div className="content">
                    <p>{props.info}</p>
                </div>
            </div>
        </div>
    )
}
