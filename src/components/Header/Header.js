import React from 'react';
import { NavLink  } from "react-router-dom";
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import 'bootstrap/dist/css/bootstrap.min.css'
import './Header.css';
import logo_1 from '../../assets/img/logo_1.png'


function Header() {

  return (

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
