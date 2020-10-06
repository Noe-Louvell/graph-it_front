import React from 'react';
import './Register.css'
import PostRegister from '../../components/PostRegister/Register'


function Register() {
  return (


    <main>
<section className="hero">
    <div className="container">
      <div className="main-message">
        <div className="titres"> Inscription</div>

      </div>
    </div>
  </section>


<section className="FormSection">
      <div className="FormContenair">


        <PostRegister />


      </div>
</section>




    </main>



    );
  }

    export default Register;
