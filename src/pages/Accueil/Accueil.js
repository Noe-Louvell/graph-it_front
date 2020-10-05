import React from 'react';
import './Accueil.css'
import GetService from '../../components/GetService/getService'
import GetEquipe2 from '../../components/GetEquipe/getEquipe2'
import GetRealisation from '../../components/GetRealisation/getRealisation'


function Accueil() {
  return (


<main>

  <section className="hero">
    <div className="container">
      <div className="main-message">
        <div className="titres"> Agence de développement web et mobile <br/>Graph-it </div>
 
      </div>
    </div>
  </section>

  <section className="hero2">
    <h1>Nos Services</h1><hr/><br/>
    <div className="container">
   <GetService/>
     </div>
    
  </section>


  <section className="hero3">
  

    
    
  </section>







</main>



  );
}

export default Accueil;
