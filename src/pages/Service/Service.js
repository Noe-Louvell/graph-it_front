import React from 'react';
import './Service.css'
import GetService from '../../components/GetService/getService'
import { DiAptana } from "react-icons/di";
import 'bootstrap/dist/css/bootstrap.min.css'
import ecran from '../../assets/img/ecran.png';
import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab'
import { BsFillChatDotsFill } from "react-icons/bs";



function Service() {
  console.log("ok")
  return (


<main>


<section className="Background HeaderPage position-relative">
    <div className="contenair">
      <div className="row">
        <div className="zoneText">
          <h1>Nos Services</h1>

          <hr/><br/>
          <h2>Nos compétences </h2>

        </div>
      </div>

    </div>



  </section>



  <div className="section2">

<Tabs defaultActiveKey="nav-tab-1" id="uncontrolled-tab-example" className="justify-content-center">
  <Tab eventKey="nav-tab-1" title="Web Design">
  <div className="container">

<div className="row">

  <div className="col-lg-4 ">

    <div className="card left-pane first border border-0">

      <div className="card-body d-flex flex-row">

        <div className="text-wrapper">

          <h4 className="card-title">Paramètres</h4>

          <p>HFIUHZ EFOIHZEOFHZF OZEIHFOHZEFO HZOEHF OIHZEFO</p>

        </div>

        <div className="card-icon ">

        <BsFillChatDotsFill/>


        </div>

      </div>

    </div>

    <div className="card left-pane  border border-0">

      <div className="card-body d-flex flex-row">

        <div className="text-wrapper">

          <h4 className="card-title">Paramètres</h4>

          <p>HFIUHZ EFOIHZEOFHZF OZEIHFOHZEFO HZOEHF OIHZEFO</p>

        </div>

        <div className="card-icon">

        <BsFillChatDotsFill/>

        </div>

      </div>

    </div>

    <div className="card left-panel first  border border-0">

      <div className="card-body">

        <div className="text-wrapper">

          <h4 className="card-title">Paramètres</h4>

          <p>HFIUHZ EFOIHZEOFHZF OZEIHFOHZEFO HZOEHF OIHZEFO</p>

        </div>

        <div className="card-icon">



        </div>

      </div>

    </div>

    <div className="card left-panel first  border border-0">

      <div className="card-body">

        <div className="text-wrapper">

          <h4 className="card-title">Paramètres</h4>

          <p>HFIUHZ EFOIHZEOFHZF OZEIHFOHZEFO HZOEHF OIHZEFO</p>

        </div>

        <div className="card-icon">



        </div>

      </div>

    </div>



  </div>

  <div className="col-lg-4">
    <img src={ecran} alt="ecran" class="img-fluid" />
  </div>

  <div className="col-lg-4">

    <div class="card right-pane first  border border-0">
      <div class="card-body">
        <div class="card-icon">
        </div>
        <div class="text-wrapper">
          <h4 class="card-title">BONJOUR</h4>
          <p>HZFEUEF EZHFIHZEF IZEUFHIUZEHF OEZFO HO</p>

        </div>
      </div>
    </div>
    <div class="card right-pane first  border border-0">
      <div class="card-body">
        <div class="card-icon">
        </div>
        <div class="text-wrapper">
          <h4 class="card-title">BONJOUR</h4>
          <p>HZFEUEF EZHFIHZEF IZEUFHIUZEHF OEZFO HO</p>

        </div>
      </div>
    </div>
    <div class="card right-pane first  border border-0">
      <div class="card-body">
        <div class="card-icon">
        </div>
        <div class="text-wrapper">
          <h4 class="card-title">BONJOUR</h4>
          <p>HZFEUEF EZHFIHZEF IZEUFHIUZEHF OEZFO HO</p>

        </div>
      </div>
    </div>
    <div class="card right-pane first  border border-0">
      <div class="card-body">
        <div class="card-icon">
        </div>
        <div class="text-wrapper">
          <h4 class="card-title">BONJOUR</h4>
          <p>HZFEUEF EZHFIHZEF IZEUFHIUZEHF OEZFO HO</p>

        </div>
      </div>
    </div>

  </div>


</div>

</div>
  </Tab>
  <Tab eventKey="nav-tab-2" title="Developpement Web">
  <div className="container">
              <div className="row">
                <div className="col-md-4">
                  <img src={ecran} alt="ecran" className="img-fluid" />
                </div>
                  <div className="col-md-8">

                  <div className="text-area">
                    <h3>BONJOUR</h3>
                    <br/><br/>

                    <p>IFJEOFIJE EOIFJ OZIJEF OIZEJF OIJEZ OIJFO IJ</p>

                    </div>
                      <br/><br/>


              <div className="icon-cards-area">
                <div className="card">
                  <div className="card-icon">
                  </div>
                  <div className="card-body">
                  <h4 class="card-title">BONJOUR</h4>
                  <p>FIEHHF ZOFH OIHZFPOZEFOPZ OPEFPOZE PF</p>
                  </div>
                </div>

                <div className="card">
                  <div className="card-icon">
                  </div>
                  <div className="card-body">
                  <h4 className="card-title">BONJOUR</h4>
                  <p>FIEHHF ZOFH OIHZFPOZEFOPZ OPEFPOZE PF</p>
                  </div>
                </div>

                <div className="card">
                  <div className="card-icon">
                  </div>
                  <div className="card-body">
                  <h4 className="card-title">BONJOUR</h4>
                  <p>FIEHHF ZOFH OIHZFPOZEFOPZ OPEFPOZE PF</p>
                  </div>
                </div>


              </div>
            </div>
            </div>
          </div>
  </Tab>
  <Tab eventKey="nav-tab-3" title="Developpement d'Applications">
  <div className="container">
              <div className="row">

                  <div className="col-md-8">

                  <div className="text-area">
                    <h3>BONJOUR</h3>
                    <br/><br/>

                    <p>IFJEOFIJE EOIFJ OZIJEF OIZEJF OIJEZ OIJFO IJ</p>

                    </div>
                      <br/><br/>


              <div className="icon-cards-area">
                <div className="card">
                  <div className="card-icon">
                  </div>
                  <div className="card-body">
                  <h4 class="card-title">BONJOUR</h4>
                  <p>FIEHHF ZOFH OIHZFPOZEFOPZ OPEFPOZE PF</p>
                  </div>
                </div>

                <div className="card">
                  <div className="card-icon">
                  </div>
                  <div className="card-body">
                  <h4 className="card-title">BONJOUR</h4>
                  <p>FIEHHF ZOFH OIHZFPOZEFOPZ OPEFPOZE PF</p>
                  </div>
                </div>

                <div className="card">
                  <div className="card-icon">
                  </div>
                  <div className="card-body">
                  <h4 className="card-title">BONJOUR</h4>
                  <p>FIEHHF ZOFH OIHZFPOZEFOPZ OPEFPOZE PF</p>
                  </div>

                </div>


              </div>
            </div>
            <div className="col-md-4">
                  <img src={ecran} alt="ecran" className="img-fluid" />
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
