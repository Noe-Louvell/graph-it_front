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
import Footer from './components/Footer/Footer';

// Import des pages du site
import Equipe from '../src/pages/Equipe/Equipe'
import Article from '../src/pages/Article/Article'
import Accueil from '../src/pages/Accueil/Accueil'
import Réalisation from '../src/pages/Réalisation/Réalisation'
import Service from '../src/pages/Service/Service'



function App() {
  return (
    <div className="App">


    <Router>

    <Header/>

    <Route exact path="/" component={Accueil}/>

    <Switch>
    <Route path="/Accueil">
    <Accueil/>
    </Route>

      <Route path="/Equipe">
        <Equipe />
      </Route>

      <Route path="/Service">
        <Service />
      </Route>

      <Route path="/Articles">
        <Article />
      </Route>

      <Route path="/Réalisations">
        <Réalisation />
      </Route>

      <Route path="/Contact">

      </Route>

    </Switch>


      <Footer/>

      </Router>



    </div>
  );
}

export default App;
