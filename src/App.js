import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,

} from "react-router-dom";
import Equipe from './pages/Equipe'

import Nav from 'react-bootstrap/Nav'
import 'bootstrap/dist/css/bootstrap.min.css'
import './components/Header/Header.css';

function App() {
  return (
    <div className="App">

    <Router>

    <Header/>


    <Switch>
      <Route path="/Equipe">
        <Equipe />
      </Route>
      <Route path="/Articles">

      </Route>
      <Route path="/">

      </Route>
      <Route path="/Réalisations">

      </Route>
      <Route path="/Contact">

      </Route>
    </Switch>
      </Router>



    </div>
  );
}

export default App;
