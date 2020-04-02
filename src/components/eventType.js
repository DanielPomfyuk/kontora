import React, { Component } from 'react'
import "../styles/eventType.css"
import logo from "../media/logo.svg";
export default class EventType extends Component {
    render() {
        return (<React.Fragment>
            <div className="bg1"></div>
            <div className="menuContainer">
                <div className="logo">
                    <img src={logo}></img>
                </div>
                <div className="rightSide">
                    <ul>
                        <li>
                            <img src="https://logos-download.com/wp-content/uploads/2018/03/Batman_logo_black.svg"></img>
                            <strong>Zalupka</strong>
                        </li>
                        <li>
                            <img src="https://logos-download.com/wp-content/uploads/2018/03/Batman_logo_black.svg"></img>
                            <strong>Zalupka</strong>
                        </li>
                        <li>
                            <img src="https://logos-download.com/wp-content/uploads/2018/03/Batman_logo_black.svg"></img>
                            <strong>Zalupka</strong>
                        </li>
                    </ul>
                </div>
            </div>
        </React.Fragment >)
    }
}
