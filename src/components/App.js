import React from 'react';
import Home from './Home.js'
import '../styles/App.css'
import PresentorCollection from "./PresesntorsCollection"
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  return (<React.Fragment>
    <Router>
      <Switch>
        <Route path="/cards">
          <PresentorCollection />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  </React.Fragment>)
}
export default App;