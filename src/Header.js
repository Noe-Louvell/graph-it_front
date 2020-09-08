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
          <div className="Header">

            <div className="Menu">
              <Nav defaultActiveKey="/" as="ul" className="justify-content-center">
                <Nav.Item as="li">
                  <Nav.Link className="MenuText">
                    <Link to="/Equipe">L'Equipe</Link>
                  </Nav.Link>

                </Nav.Item>

                <Nav.Item as="li" defaultActiveKey="/articles">
                  <Nav.Link>
                    <Link to="/Articles">Nos Services</Link>
                  </Nav.Link>

<<<<<<< HEAD
            <Nav.Item as="li">
              <Nav.Link>
                <Link to="/"><Logo/></Link>
              </Nav.Link>
=======
                </Nav.Item>
>>>>>>> 673a942c9a21a18ec5d6090e34b216526194457e

                <Nav.Item as="li">
                  <Nav.Link>
                    <Link to="/"><Logo className="logo"/></Link>
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




<<<<<<< HEAD
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
=======
            </div>
          </div>
>>>>>>> 673a942c9a21a18ec5d6090e34b216526194457e
  );
}


export default Header
