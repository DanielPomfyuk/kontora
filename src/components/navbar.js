import React, { Component } from 'react'
import navbarData from "../mokData/navbarData"
import NavbarLink from "./navbarLink.js"
export default class Navbar extends Component {
    constructor() {
        super()
        state = {
            links: navbarData
        }
    }
    render() {
        const linksCollection = this.state.links.map(link => <NavbarLink {...link} />)
        return (
            <div>
                {linksCollection}
            </div>
        )
    }
}
