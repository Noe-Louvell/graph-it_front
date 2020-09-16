import React from 'react';
import './Accueil.css'
import GetService from '../../components/GetService/getService'
import GetEquipe2 from '../../components/GetEquipe/getEquipe2'


function Accueil() {
  return (


<main>

  <section className="Background HeaderPage position-relative">
    <div className="contenair">
      <div className="row">
        <div className="zoneText">
          <h1> Graph-it </h1>
          <h2> Agence de développement web et mobile </h2>
          <hr/>
        </div>
      </div>

    </div>



  </section>




  <section className="nosServices">
  <div className="contenaire">
        <h1>Nos Services</h1>
        <p>quand un imprimeur anonyme assembla ensemble des morceaux de texte
        pour réaliser un livre spécimen de polices de texte.
        Il n'a pas fait que survivre cinq siècles,
        </p>

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
