import React from 'react';
import './App.css';
import Header from "./Header"
<<<<<<< HEAD
import { ReactComponent as Logo } from './logo_2.svg';
=======
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
>>>>>>> 673a942c9a21a18ec5d6090e34b216526194457e

function App() {
  return (
    <div className="App">
<<<<<<< HEAD
      <Header />
      <header className="App-header">
        <Logo/>

      </header>
=======

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


>>>>>>> 673a942c9a21a18ec5d6090e34b216526194457e
    </div>
  );
}

export default App;
