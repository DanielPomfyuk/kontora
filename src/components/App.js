import React from 'react';
import '../styles/App.css';
import logo from '../media/logo.svg'
import PresentorCollection from "./presesntorsCollection"

function App() {
  return (<React.Fragment>
    <div className="imgWrapper">
      <img src={logo} className="logo"></img>
    </div>
    <PresentorCollection />
  </React.Fragment>)
}
export default App;