import React from 'react';
import { ReactComponent as Logo } from './assets/img/logo_3.svg';
import Nav from 'react-bootstrap/Nav'
import 'bootstrap/dist/css/bootstrap.min.css'
import './Header.css';

function Header() {

 return(
          <div className="header">
          <Nav defaultActiveKey="/home" as="ul" className="justify-content-center">
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
              <Nav.Link eventKey="link-3">Réalisations</Nav.Link>
              </Nav.Item>
              <Nav.Item as="li">
              <Nav.Link eventKey="link-4">Nous contacter</Nav.Link>
                  </Nav.Item>
          </Nav>
          </div>
        );
      }


export default Header
