import React from 'react'
import "../styles/navbar.css"
export default function NavbarLink() {
    return (
        <nav>
            <div className="hamburger">
                <div className="line"></div>
                <div className="line"></div>
                <div className="line"></div>
            </div>
            <ul className="nav-links">
                <li><a>About</a></li>
                <li><a>Contact</a></li>
                <li><a>Project</a></li>
            </ul>
        </nav>
    )
}
