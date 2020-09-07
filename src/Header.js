import React from 'react';
import { ReactComponent as Logo } from './img/assets/logo_3.svg';


function Header() {

 return(
          <div>
          <h3>Equipe</h3>
            {/* Logo is an actual React component */}
            <Logo />
          </div>
        );
      }


export default Header
