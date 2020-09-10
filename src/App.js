import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'

// Import Navigation
import {
  BrowserRouter as Router,
  Switch,
  Route,

} from "react-router-dom";

// Import des components du site
import './components/Header/Header.css';
import Header from './components/Header/Header';

// Import des pages du site
import Equipe from '../src/pages/Equipe/Equipe'
import Article from '../src/pages/Article/Article'
import Accueil from '../src/pages/Accueil/Accueil'





function App() {
  return (
    <div className="App">


    <Router>

    <Header/>

    <Route path="/Accueil">
    
    </Route>


    <Switch>
    <Route path="/Accueil">
    <Accueil/>
    </Route>

      <Route path="/Equipe">
        <Equipe />
      </Route>

      <Route path="/Articles">
        <Article />
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
