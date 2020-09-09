import React from 'react';
import { NavLink  } from "react-router-dom";

import Nav from 'react-bootstrap/Nav'
import 'bootstrap/dist/css/bootstrap.min.css'
import './Header.css';
import logo_1 from '../../assets/img/logo_1.png'


function Header() {

  return (

          <div id="Header"className="fixed-top">

            <div className="Menu">
              <Nav as="ul" className="justify-content-center">

              <Nav.Item as="li">
                <Nav.Link>
                  <NavLink  to="/Accueil" >Accueil</NavLink >
                </Nav.Link>
              </Nav.Item>

                <Nav.Item as="li">
                  <Nav.Link className="MenuText">
                    <NavLink  to="/Equipe">L'Equipe</NavLink >
                  </Nav.Link>
                </Nav.Item>

                <Nav.Item as="li" defaultActiveKey="/articles">
                  <Nav.Link>
                    <NavLink  to="/Services">Nos Services</NavLink >
                  </Nav.Link>
                </Nav.Item>

                <Nav.Item as="li">
                  <Nav.Link>
                    <NavLink  to="/Accueil">
                    <img className="logo" src={logo_1} alt="Logo" />
                    </NavLink >
                  </Nav.Link>
                </Nav.Item>

                <Nav.Item as="li">
                  <Nav.Link>
                    <NavLink  to="/Réalisations">Réalisations</NavLink >
                  </Nav.Link>
                </Nav.Item>

                <Nav.Item as="li">
                  <Nav.Link>
                    <NavLink  to="/Articles">Articles</NavLink >
                  </Nav.Link>
                </Nav.Item>

                <Nav.Item as="li">
                  <Nav.Link>
                    <NavLink  to="/Contact">Nous contacter</NavLink>
                  </Nav.Link>
                </Nav.Item>
              </Nav>




            </div>
          </div>
  );
}


export default Header
