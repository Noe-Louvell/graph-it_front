import React from 'react';
import { ReactComponent as Logo } from './assets/img/logo_3.svg';
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'


function Header() {

 return(
          <div>
          <Nav defaultActiveKey="/home" as="ul">
              <Nav.Item as="li">
              <Nav.Link href="/home">Equipe</Nav.Link>
          </Nav.Item>
          <Nav.Item as="li">
              <Nav.Link eventKey="link-1">Article</Nav.Link>
              </Nav.Item>
          <Nav.Item as="li">
              <Nav.Link eventKey="link-2"><Logo/></Nav.Link>
          </Nav.Item>
          <Nav.Item as="li">
              <Nav.Link eventKey="link-1">Réalisations</Nav.Link>
              </Nav.Item>
              <Nav.Item as="li">
                  <Nav.Link eventKey="link-1">Nous contacter</Nav.Link>
                  </Nav.Item>
          </Nav>
          </div>
        );
      }


export default Header
