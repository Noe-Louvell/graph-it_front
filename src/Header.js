import React from 'react';
import { ReactComponent as Logo } from './assets/img/logo_3.svg';
import Nav from 'react-bootstrap/Nav'



function Header() {

 return(
          <div>
          <Nav defaultActiveKey="/home" as="ul">
              <Nav.Item as="li">
                <Nav.Link href="/home">Equipe</Nav.Link>
                <Nav.Link eventKey="link-1">Article</Nav.Link>
                <Nav.Link eventKey="disabled"><Logo/></Nav.Link>
                <Nav.Link eventKey="link-1">Réalisations</Nav.Link>
                <Nav.Link eventKey="link-1">Nous contacter</Nav.Link>
              </Nav.Item>
          </Nav>
          </div>
        );
      }


export default Header
