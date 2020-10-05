import React from 'react';
import './Realisation.css'
import GetRealisation from '../../components/GetRealisation/getRealisation';


function Realisation() {
  return (

      <main>

        <section className="hero">
          <div className="container">
            <div className="main-message">
              <h3> Nos réalisations</h3>
              <h1> Nos Projets</h1>
              <p></p>
            </div>
          </div>
        </section>



        <div className="container">
          <div className="content-wrapper">
            <div className="portfolio-items-wrapper">

              <GetRealisation/>

            </div>
          </div>
        </div>

      </main>
  );
}

export default Realisation;



