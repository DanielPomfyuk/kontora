import React, { useEffect, useRef, createRef } from 'react'
import "../styles/navbar.css"
import { Link } from "react-router-dom";

export default function NavbarLink(props) {
    return (<Link onClick={() => {
        props.navbar.current.style.height = "0";
    }} to={props.path} className="link">{props.name}</Link>)
}