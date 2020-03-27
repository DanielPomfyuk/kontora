import React from 'react';
import Home from './Home.js'
import EventType from "./eventType"
import '../styles/App.css'
import PresentorCollection from "./PresesntorsCollection"
import Reviews from "./reviews"
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  return (<React.Fragment>
    <Router>
      <Switch>
        <Route path="/review"><Reviews /></Route>
        <Route path="/event"><EventType /></Route>
        <Route path="/cards"> <PresentorCollection /></Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  </React.Fragment>)
}
export default App;