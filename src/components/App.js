import React from 'react';
import Home from './Home.js'
import EventType from "./eventType"
import '../styles/App.css'
import PresentorCollection from "./PresesntorsCollection"
import ReviewCollection from "./reviewsCollection"
import Navbar from "./navbar"
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  return (<React.Fragment>
    <Router>
      <Navbar />
      <Switch>
        <Route path="/review"><ReviewCollection /></Route>
        <Route path="/event"><EventType /></Route>
        <Route path="/presenters"> <PresentorCollection /></Route>
        <Route exact path="/"><Home /></Route>
      </Switch>
    </Router>
  </React.Fragment>)
}
export default App;