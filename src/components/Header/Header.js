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
    <NavLink  to="/Accueil" >Accueil</NavLink >
    <NavLink  to="/Equipe">L'Equipe</NavLink >
    <NavLink  to="/Service">Nos Services</NavLink >
    <NavLink  to="/Realisation">Realisations</NavLink >
    <NavLink  to="/Articles">Articles</NavLink >
    <NavLink  to="/Contact">Nous contacter</NavLink>
    </Nav>
  </Navbar.Collapse>
</Navbar>
        
  );
}


export default Header
