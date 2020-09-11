import React from 'react';
import './Service.css'
import GetService from '../../components/GetService/getService'
import { DiAptana } from "react-icons/di";
import 'bootstrap/dist/css/bootstrap.min.css'


function Service() {
  console.log("ok")
  return (


<main>
<div>
<p>fjorjfoej<br/><br/><br/><br/><br/></p></div>

  <section className="nosServices">
    <div className="tabs">

      <div className="container">

        <div className="row">

          <div className="col-md-12">

            <h2>Nos Services</h2>
            <div className="p-heading p-large">
              10000 000000000 000000000 00000000 00000 00000000 0000000000 000000000 000000000<br/><br/><br/>
            </div>

          </div>

        </div>

        <div className="row">

          <ul className="nav nav-tabs">

            <li class="nav-item">

              <a className="nav-link active" id="nav-tab-1" data-toggle="tab" href="#tab-1">
              <DiAptana/>
              Web Design
              </a>

            </li>

            <li class="nav-item">

              <a className="nav-link active" id="nav-tab-1" data-toggle="tab" href="#tab-1">
              <DiAptana/>
              Developpement Web
              </a>

            </li>

            <li class="nav-item">

              <a className="nav-link active" id="nav-tab-1" data-toggle="tab" href="#tab-1">
              <DiAptana/>
              Developpement d'Applications
              </a>

            </li>

          </ul>

          <div className="tab-content">

            <div className="tab-pane fade show active" id="tab-1">

              <div className="container">

                <div className="row">

                </div>

              </div>

            </div>

          </div>

        </div>

      </div>

    </div>

  </section>







</main>



  );
}

export default Service;
