import React from 'react'
import "../styles/navbar.css"
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCommentDots, faSmileWink, faHandShake } from '@fortawesome/free-solid-svg-icons'

export default function NavbarLink(props) {
    return (<Link onClick={() => {
        props.navbar.current.style.width = "0";
    }} to={props.path} className="link"><FontAwesomeIcon className="icon" icon={faSmileWink} /> {props.name}</Link>)
}