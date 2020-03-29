import React, { Component } from 'react'
import navbarData from "../mokData/navbarData"
import NavbarLink from "./navbarLink.js"
import "../styles/navbar.css"
export default class Navbar extends Component {

    constructor() {
        super()
        this.state = {
            navbar: React.createRef(),
            links: navbarData
        }
        this.closeMenu = this.closeMenu.bind(this);
        this.openMenu = this.openMenu.bind(this);
    }
    openMenu() {
        this.state.navbar.current.style.height = "100%";
    }
    closeMenu() {
        this.state.navbar.current.style.height = "0";
    }
    render() {
        const linksCollection = this.state.links.map(link => <NavbarLink {...link} navbar={this.state.navbar} />)
        return (
            <React.Fragment>
                <span className="menu-icon" onClick={this.openMenu}>&#9776;</span>
                <div ref={this.state.navbar} className="menu-container">
                    <span className="closeBtn" onClick={this.closeMenu}>&times;</span>
                    <div className="menu-content">
                        {linksCollection}
                    </div>
                </div>
            </React.Fragment>
        )
    }
}
