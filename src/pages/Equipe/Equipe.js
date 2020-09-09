import React from 'react';
import './Equipe.css'
import {ReactComponent as Footer} from '../../assets/img/fond_footer-couleur.svg'
import GetEquipe from '../../components/GetEquipe/getEquipe'

function Equipe() {


  return (


<main>

  <section className="Background HeaderPage">
    <div className="contenair">
      <div className="row">
        <div className="zoneText">
          <h1> Notre équipe </h1>
          <h2> Etuidant du cesi </h2>
        </div>
      </div>
    </div>
  </section>


  <div className="contenair">
    <div className="row description">
      <div className="descriptionText">
        <h1 className="descriptionTitre">Lorem ipsum as title</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc finibus tempus vestibulum. Donec in lobortis tellus. Sed sed pretium risus, sit amet tempor nisl. Sed sit amet lacus nulla. Nam est nibh, feugiat interdum nibh in, placerat ullamcorper dui. Vivamus nunc turpis, mollis sed hendrerit ut, faucibus vel sem. Pellentesque in pellentesque magna. Aenean laoreet</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc finibus tempus vestibulum. Donec in lobortis tellus. Sed sed pretium risus, sit amet tempor nisl. Sed sit amet lacus nulla. Nam est nibh, feugiat interdum nibh in, placerat ullamcorper dui. Vivamus nunc turpis, mollis sed hendrerit ut, faucibus vel sem. Pellentesque in pellentesque magna. Aenean laoreet</p>
      </div>
      <div className="descriptionImg">
        <div className="logoCesi">
          <img src="../../assets/img/CESI.png" />
        </div>
      </div>
    </div>
  </div>

  <section className="Background HeaderPage">
    <div className="contenair">
      <div className="row">
        <div className="zoneText">
          <div>
              <GetEquipe/>
          </div>
        </div>
      </div>
    </div>
  </section>


</main>



  );
}

export default Equipe;
