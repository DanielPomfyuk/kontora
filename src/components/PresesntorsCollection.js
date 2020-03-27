import React, { Component } from 'react'
import PresesntorCard from "./PresentorCard"
import presentroData from "../mokData/presentorsData"
import "../styles/presentorCard.css"

export default class presesntorsCollection extends Component {
    constructor() {
        super()
        this.state = {
            data: presentroData
        }
    }
    render() {
        const dataComponents = this.state.data.map(presentor => <PresesntorCard {...presentor} />)
        return (
            <div className="presesntorContainer">
                {dataComponents}
            </div>
        )
    }
}
