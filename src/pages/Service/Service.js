import React from 'react';
import './Service.css'
import GetService from '../../components/GetService/getService'
import { DiAptana } from "react-icons/di";
import 'bootstrap/dist/css/bootstrap.min.css'
import ecran from '../../assets/img/ecran.png';
import ecran2 from '../../assets/img/ecran2.png';
import ecran3 from '../../assets/img/ecran3.png';
import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab'
import { BsFillChatDotsFill } from "react-icons/bs";



function Service() {
  console.log("ok")
  return (


<main>


<section className="hero">
    <div className="container">
      <div className="main-message">
        <div className="titres"> Nos services</div>
 
      </div>
    </div>
  </section>



  <div className="section2">

<Tabs defaultActiveKey="nav-tab-1" id="uncontrolled-tab-example" className="justify-content-center">
  <Tab eventKey="nav-tab-1" title="Web Design">
  <div className="container">

<div className="row">

  <div className="col-lg-4 "><br/>

    <div className="card left-pane first border border-0">

      <div className="card-body d-flex flex-row">

        <div className="text-wrapper">

          <h4 className="card-title">Programmation</h4>

          <p>Des connaissances en HTML, CSS, PHP et JS</p>

        </div>

        <div className="card-icon ">




        </div>

      </div>

    </div><br/>

    <div className="card left-pane  border border-0">

      <div className="card-body d-flex flex-row">

        <div className="text-wrapper">

          <h4 className="card-title">Cohérence</h4>

          <p>Une charte graphique réalisée dès le début du projet</p>

        </div>

        <div className="card-icon">



        </div>

      </div>

    </div><br/>

    <div className="card left-panel first  border border-0">

      <div className="card-body">

        <div className="text-wrapper">

          <h4 className="card-title">Esthétisme</h4>

          <p>Photoshop, Illustrator, Dreamweaver, Flash et JS</p>

        </div>

        <div className="card-icon">



        </div>

      </div>

    </div><br/>

    <div className="card left-panel first  border border-0">

      <div className="card-body">

        <div className="text-wrapper">

          <h4 className="card-title">Optimisation</h4>

          <p>SEO: Search Engine Optimization</p>

        </div>

        <div className="card-icon">



        </div>

      </div>

    </div><br/>



  </div>

  <div className="col-lg-4">
    <img src={ecran} alt="ecran" class="img-fluid" />
  </div>

  <div className="col-lg-4"><br/>

    <div class="card right-pane first  border border-0">
      <div class="card-body">
        <div class="card-icon">
        </div>
        <div class="text-wrapper">
          <h4 class="card-title">Formation</h4>
          <p>Une formation qui nous accompagne dans notre diplome</p>

        </div>
      </div>
    </div><br/>
    <div class="card right-pane first  border border-0">
      <div class="card-body">
        <div class="card-icon">
        </div>
        <div class="text-wrapper">
          <h4 class="card-title">Rigueur et précision</h4>
          <p>Produit fini et fonctionnel</p>

        </div>
      </div>
    </div><br/>
    <div class="card right-pane first  border border-0">
      <div class="card-body">
        <div class="card-icon">
        </div>
        <div class="text-wrapper">
          <h4 class="card-title">User experience</h4>
          <p>création d'un site centré une l'expérience utilisateur</p>

        </div>
      </div>
    </div><br/>
    <div class="card right-pane first  border border-0">
      <div class="card-body">
        <div class="card-icon">
        </div>
        <div class="text-wrapper">
          <h4 class="card-title">Créativité</h4>
          <p>Une touche de renouveau dans les sites Web</p>

        </div>
      </div>
    </div>

  </div><br/>


</div>

</div>
  </Tab>
  <Tab eventKey="nav-tab-2" title="Developpement Web">
  <div className="container">
              <div className="row">
                <div className="col-md-4">
                  <img src={ecran3} alt="ecran3" className="img-fluid" />
                </div>
                  <div className="col-md-8">

                  <div className="icon-cards-area"><br/><br/>
                    <div className="card">
                      <div className="card-icon">
                      </div>
                      <div className="card-body">
                      <h4 class="card-title">Analyse des besoins</h4>
                      <p>Nous analysons les besoins réels pour le projet ainsi que les techniques adaptées.</p>
                      </div>
                    </div>

                    </div><br/>



              <div className="icon-cards-area">
                <div className="card">
                  <div className="card-icon">
                  </div>
                  <div className="card-body">
                  <h4 class="card-title">Conception du site</h4>
                  <p>Réalisation de la BDD et du site visuel.</p>
                  </div>
                </div><br/>

                <div className="card">
                  <div className="card-icon">
                  </div>
                  <div className="card-body">
                  <h4 className="card-title">Programmation</h4>
                  <p>On développe les fonctionnalités du site Web.</p>
                  </div>
                </div><br/>

                <div className="card">
                  <div className="card-icon">
                  </div>
                  <div className="card-body">
                  <h4 className="card-title">Test et mise en production</h4>
                  <p>On vous fait tester le site pour corriger les éventuelles erreurs. Puis on met le site en ligne.</p>
                  </div>
                </div><br/>


              </div>
            </div>
            </div>
          </div>
  </Tab>
  <Tab eventKey="nav-tab-3" title="Developpement d'Applications">
  <div className="container">
              <div className="row">

                  <div className="col-md-8"><br/><br/>

                  <div className="icon-cards-area">
                    <div className="card">
                      <div className="card-icon">
                      </div>
                      <div className="card-body">
                      <h4 class="card-title">Analyse des besoins</h4>
                      <p>Nous analysons les besoins réels pour le projet ainsi que les techniques adaptées.</p>
                      </div>
                    </div><br/>

                    </div>



              <div className="icon-cards-area">
                <div className="card">
                  <div className="card-icon">
                  </div>
                  <div className="card-body">
                  <h4 class="card-title">Conception de l'Application</h4>
                  <p>Réalisation de la BDD et de l'app visuelle.</p>
                  </div>
                </div><br/>

                <div className="card">
                  <div className="card-icon">
                  </div>
                  <div className="card-body">
                  <h4 className="card-title">Programmation</h4>
                  <p>On ajoute les fonctionnalités demandés</p>
                  </div>
                </div><br/>

                <div className="card">
                  <div className="card-icon">
                  </div>
                  <div className="card-body">
                  <h4 className="card-title">Test de l'application</h4>
                  <p>On vous fait tester l'application pour corriger les éventuelles erreurs.
                  </p>
                  </div>

                </div><br/>


              </div>
            </div>
            <div className="col-md-4">
                  <img src={ecran2} alt="ecran2" className="img-fluid" />
                </div>
            </div>
          </div>
  </Tab>
</Tabs>

</div>

</main>



  );
}

export default Service;
