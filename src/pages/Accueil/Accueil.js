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
        <h3> Agence de développement web et mobile </h3>
        <h1> Graph-it  </h1>
        <p></p>
      </div>
    </div>
  </section>

  <section>
    <h1>Nos Services</h1><br/><hr/>
    <div className="container">
   <GetService/>
     </div>
    
  </section>



  <section className="nosEquipes">

    <div className="contenaire">

      <div className="services2">
        <h1>Notre équipe pour vos réalisations</h1>
        <div className="row">
            <GetEquipe2/>
        </div>

      </div>

    </div>

  </section>







</main>



  );
}

export default Accueil;
