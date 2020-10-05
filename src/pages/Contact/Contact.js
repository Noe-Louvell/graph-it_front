import React from 'react';
import './Contact.css'
import PostContact from '../../components/PostContact/Contact'


function Contact() {
  return (


    <main>
<section className="hero">
    <div className="container">
      <div className="main-message">
        <div className="titres"> Contact</div>

      </div>
    </div>
  </section>


<section className="FormSection">
      <div className="FormContenair">


        <PostContact />


      </div>
</section>




    </main>



  );
}

export default Contact;
