import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,

} from "react-router-dom";

import Nav from 'react-bootstrap/Nav'
import 'bootstrap/dist/css/bootstrap.min.css'
import './Header.css';
import Equipe from '../../pages/Equipe'
import logo_1 from '../../assets/img/logo_1.png'


function Header() {

  return (

          <div className="Header">

            <div className="Menu">
              <Nav defaultActiveKey="/" as="ul" className="justify-content-center">

              <Nav.Item as="li" defaultActiveKey="/articles">
                <Nav.Link>
                  <Link to="/">Accueil</Link>
                </Nav.Link>

              </Nav.Item>
                <Nav.Item as="li">
                  <Nav.Link className="MenuText">
                    <Link to="/Equipe">L'Equipe</Link>
                  </Nav.Link>

                </Nav.Item>

                <Nav.Item as="li" defaultActiveKey="/articles">
                  <Nav.Link>
                    <Link to="/Services">Nos Services</Link>
                  </Nav.Link>

                </Nav.Item>

                <Nav.Item as="li">
                  <Nav.Link>

                    <Link to="/">
                    <img className="logo" src={logo_1} alt="Logo" />
                    </Link>
                  </Nav.Link>

                </Nav.Item>

                <Nav.Item as="li">
                  <Nav.Link>
                    <Link to="/Réalisations">Réalisations</Link>
                  </Nav.Link>

                </Nav.Item>

                <Nav.Item as="li">
                  <Nav.Link>
                    <Link to="/Articles">Articles</Link>
                  </Nav.Link>

                </Nav.Item>

                <Nav.Item as="li">
                  <Nav.Link>
                    <Link to="/Contact">Nous contacter</Link>
                  </Nav.Link>

                </Nav.Item>
              </Nav>




            </div>
          </div>
  );
}


export default Header
