import React from 'react';
import './Contact.css'
import PostContact from '../../components/PostContact/Contact'

function Contact() {
  return (


    <main id="Body">

      <section className="Background HeaderPage">
        <div className="contenair">
          <div className="row">
            <div className="zoneText">
              <h1> Nous contacter </h1>
              <h2> Contactez nos étudiants par message ou téléphone </h2>
            </div>
          </div>
        </div>
        <div className="FormContenair">


            <PostContact />


        </div>
      </section>









    </main>



  );
}

export default Contact;
