import React, { Component } from 'react'
import "../styles/eventType.css"
export default class EventType extends Component {
    render() {
        return (<React.Fragment>
            <nav class="TheList" id="TheList">
                <div class="TheList__Wrapper">
                    <ul class="TheList__List" id="TheList__List">
                        <li>
                            <a href="#" data-color="#b5a9a1">
                                <span class="TheList__Title">О нас</span>
                            </a>
                        </li>
                        <li>
                            <a href="#" data-color="#0aeac0">
                                <span class="TheList__Title">Команда</span>
                            </a>
                        </li>

                        <li>
                            <a href="#" data-color="#01622C">
                                <span class="TheList__Title">Заказать</span>
                            </a>
                        </li>
                        <li>
                            <a href="#" data-color="#1d1d1d">
                                <span class="TheList__Title">Отзывы</span>
                            </a>
                        </li>
                    </ul>
                </div>
            </nav>
        </React.Fragment >)
    }
}
