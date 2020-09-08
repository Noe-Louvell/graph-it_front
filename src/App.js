import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from "./Header"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,

} from "react-router-dom";
import Equipe from './pages/Equipe'
import { ReactComponent as Logo } from './assets/img/logo_3.svg';
import Nav from 'react-bootstrap/Nav'
import 'bootstrap/dist/css/bootstrap.min.css'
import './Header.css';

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
