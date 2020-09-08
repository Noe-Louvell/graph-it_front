import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,

} from "react-router-dom";
import { ReactComponent as Logo } from './assets/img/logo_3.svg';
import Nav from 'react-bootstrap/Nav'
import 'bootstrap/dist/css/bootstrap.min.css'
import './Header.css';
import Equipe from './pages/Equipe'

function Header() {

  return (
    <div className="header">
      <Router>
        <div>
          <Nav defaultActiveKey="/" as="ul" className="justify-content-center">
            <Nav.Item as="li">
              <Nav.Link>
                <Link to="/Equipe">Equipe</Link>
              </Nav.Link>

            </Nav.Item>

            <Nav.Item as="li" defaultActiveKey="/articles">
              <Nav.Link>
                <Link to="/Articles">Articles</Link>
              </Nav.Link>

            </Nav.Item>

            <Nav.Item as="li">
              <Nav.Link>
                <Link to="/"><Logo/></Link>
              </Nav.Link>

            </Nav.Item>

            <Nav.Item as="li">
              <Nav.Link>
                <Link to="/Réalisations">Réalisations</Link>
              </Nav.Link>

            </Nav.Item>

            <Nav.Item as="li">
              <Nav.Link>
                <Link to="/Contact">Nous contacter</Link>
              </Nav.Link>

            </Nav.Item>
          </Nav>





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




        </div>






      </Router>


    </div>
  );
}


export default Header
