import React, { useEffect, useRef, createRef } from 'react'
import "../styles/navbar.css"
import { Link } from "react-router-dom";

class NavbarLink extends React.Component {
    constructor() {
        super()
        this.state = {
            navbar: React.createRef(),
            menubtn: React.createRef()
        }
        this.closeMenu = this.closeMenu.bind(this);
    }
    closeMenu() {
        this.state.navbar.current.style.height = "0";
    }
    render() {
        return (<React.Fragment>
            <span className="menu-icon" onClick={() => {
                this.state.navbar.current.style.height = "100%"
            }}>&#9776;</span>
            <div ref={this.state.navbar} className="menu-container">
                <span className="closeBtn" onClick={this.closeMenu}>&times;</span>
                <div className="menu-content">
                    <Link onClick={this.closeMenu} to="/review" className="link">Reviews</Link>
                    <Link onClick={this.closeMenu} to="cards" className="link">Presenters</Link>
                    <Link onClick={this.closeMenu} to="#" className="link">Book us</Link>
                </div>
            </div>
        </React.Fragment>)
    }
}
export default NavbarLink;