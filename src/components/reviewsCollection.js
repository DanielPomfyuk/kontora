import React, { Component } from 'react'
import reviewsData from "../mokData/reviewsData"
import ReviewCard from "./reviewCard"
import "../styles/review.css"

export default class reviewsCollection extends Component {
    constructor() {
        super()
        this.state = {
            reviewsData: reviewsData
        }
    }
    render() {
        const reviewsCollection = this.state.reviewsData.map(review => <ReviewCard {...review} />)
        return (
            <div className="reviewContainer">
                {reviewsCollection}
            </div>
        )
    }
}
