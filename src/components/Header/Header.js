import React from 'react';
import { NavLink  } from "react-router-dom";
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import 'bootstrap/dist/css/bootstrap.min.css'
import './Header.css';
import logo_1 from '../../assets/img/logo_1.png'


function Header() {

  return (

<<<<<<< HEAD
=======
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
                    <NavLink  to="/Service">Nos Services</NavLink >
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
                    <NavLink  to="/Realisation">Realisations</NavLink >
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

>>>>>>> f54a0119d2e362dfb41c2dd0b83e5633fedb4077

    <Navbar bg="light " expand="lg" fixed="top">
  <Navbar.Brand to="/Accueil"><img className="logo" src={logo_1} alt="Logo" /></Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto ">
    <Nav.Link  to="/Accueil" >Accueil</Nav.Link >
    <Nav.Link  to="/Equipe">L'Equipe</Nav.Link >
    <Nav.Link  to="/Service">Nos Services</Nav.Link >
    <Nav.Link  to="/Realisation">Realisations</Nav.Link >
    <Nav.Link  to="/Articles">Articles</Nav.Link >
    <Nav.Link  to="/Contact">Nous contacter</Nav.Link>
    </Nav>
  </Navbar.Collapse>
</Navbar>


          
  );
}


export default Header
