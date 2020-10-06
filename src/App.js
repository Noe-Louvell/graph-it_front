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
import ArticleD from '../src/pages/Dashboard/ArticleD'
import Accueil from '../src/pages/Accueil/Accueil'
import Realisation from '../src/pages/Realisation/Realisation'
import RealisationD from '../src/pages/Dashboard/RealisationD'
import Service from '../src/pages/Service/Service'
import Contact from '../src/pages/Contact/Contact'
import Login from '../src/pages/Login/Login'
import Dashboard from '../src/pages/Dashboard/Dashboard'
import Trello from '../src/pages/Dashboard/Trello'
import EquipeD from '../src/pages/Dashboard/EquipeD'
import ContactD from '../src/pages/Dashboard/ContactD'
import Clients from '../src/pages/Clients/Clients'
import Projets from '../src/pages/Projets/Projets'
import RenvoiFormulaire from '../src/pages/RenvoiFormulaire/RenvoiFormulaire'



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

      <Route path="/ArticleD">
        <ArticleD/>
      </Route>

      <Route path="/Realisation">
        <Realisation />
      </Route>

      <Route path="/RealisationD">
        <RealisationD/>
      </Route>

      <Route path="/Contact">
        <Contact/>
      </Route>

      <Route path="/Login">
        <Login/>
    </Route>

    <Route path="/Dashboard">
    <Dashboard/>
    </Route>
    
    <Route path="/Clients">
    <Clients/>
    </Route>

    <Route path="/ContactD">
    <ContactD/>
    </Route>

    <Route path="/EquipeD">
    <EquipeD/>
    </Route>

    <Route path="/Projets">
    <Projets/>
    </Route>

    <Route path="/RenvoiFormulaire">
    <RenvoiFormulaire />
    </Route>

    <Route path="/Trello">
    <Trello />
    </Route>


    </Switch>


      <Footer/>

      </Router>



    </div>
  );
}

export default App;
