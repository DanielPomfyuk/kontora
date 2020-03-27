import React from 'react'
import "../styles/navbar.css"
import { Link } from "react-router-dom";

export default function NavbarLink() {
    return (<React.Fragment>
        <div className="navbar">
            <ul className="navLinks">
                <li><Link className="link" to="/cards">Presenters</Link></li>
                <li><Link className="link" to="/review">Reviews</Link></li>
                <li><Link className="link" to="/">Book us</Link></li>
            </ul>
        </div>
    </React.Fragment>)
}
