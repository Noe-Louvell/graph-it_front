import React from 'react';
import { ReactComponent as Logo } from './img/logo_3.svg';


function Header() {

 return(
          <div>
            {/* Logo is an actual React component */}
            <Logo />
          </div>
        );
      }


export default Header