import React from 'react';
import { BiWorld } from 'react-icons/bi';
import './Accueil.css'
import {ReactComponent as Footer} from '../../assets/img/fond_footer-couleur.svg'

function Accueil() {
  return (


<main>

  <section className="Background HeaderPage">
    <div className="contenair">
      <div className="row">
        <div className="zoneText">
          <h1> Graph-it </h1>
          <h2> Agence de développement web et mobile </h2>
          <hr/>
        </div>
      </div>
      <image className="bg-page4" src="../../assets/img/bg-page4.png)"/>
    </div>



  </section>




  <section className="Nos Services">
  <div className="contenaire">
        <h1>Nos Services</h1>
        <p>quand un imprimeur anonyme assembla ensemble des morceaux de texte
        pour réaliser un livre spécimen de polices de texte.
        Il n'a pas fait que survivre cinq siècles,
        </p>
        <div className="services">
          <div className="service">
            <i className="fa fa-globe"><BiWorld/></i>
            <h4 className="titre-nosServices">Web design</h4>
            <p className="descriptionText-nosServices">
            Il a été popularisé
            dans les années 1960 grâce à la vente de feuilles Letraset
            contenant des passages du Lorem Ipsum,
            </p>
          </div>

          <div className="service">

            <i className="fa fa-globe"><BiWorld/></i>
            <h4 className="titre-nosServices">Developpement Web</h4>
            <p className="descriptionText-nosServices">
            Il a été popularisé
            dans les années 1960 grâce à la vente de feuilles Letraset
            contenant des passages du Lorem Ipsum,
            </p>
          </div>

          <div className="service">
            <i className="fa fa-globe"><BiWorld/></i>
            <h4 className="titre-nosServices">Developpement d'applications</h4>
            <p className="descriptionText-nosServices">
            Il a été popularisé
            dans les années 1960 grâce à la vente de feuilles Letraset
            contenant des passages du Lorem Ipsum, et,
            </p>
          </div>
        </div>


  </div>
  </section>



  <div className="contenair">
    <div className="row description">
      <div className="descriptionText">
        <h1></h1>
        <p></p>

      </div>
      <div className="descriptionImg">
        <h1></h1>
      </div>
    </div>
  </div>
  <div className="contenair">
    <div className="row description">
      <div className="descriptionText">
        <h1>Le cesi</h1>
        <p>statut étudiant à cesi</p>

      </div>
      <div className="descriptionImg">
        <h1>logo cesi.png</h1>
      </div>
    </div>
  </div>
  <div className="contenair">
    <div className="row description">
      <div className="descriptionText">
        <h1>Le cesi</h1>
        <p>statut étudiant à cesi</p>

      </div>
      <div className="descriptionImg">
        <h1>logo cesi.png</h1>
      </div>
    </div>
  </div>



</main>



  );
}

export default Accueil;
