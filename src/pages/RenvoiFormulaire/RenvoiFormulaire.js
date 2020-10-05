import React from 'react';
import PostRenvoiFormulaire from '../../components/PostRenvoiFormulaire/RenvoiFormulaire'
import './RenvoiFormulaire.css'

function RenvoiFormulaire() {
    return (


        <main>
            <section className="hero">
                <div className="container">
                    <div className="main-message">
                        <div className="titres"> Dites nous en plus</div>

                    </div>
                </div>
            </section>


            <section className="FormSection">
                <div className="FormContenair">


                    <PostRenvoiFormulaire />


                </div>
            </section>




        </main>



    );
}

export default RenvoiFormulaire;
