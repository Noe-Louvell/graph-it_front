import React, { useState } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css'
import './getEquipe.css';



function GetEquipe() {



    const [data, setData] = useState(null);
    function getEquipeFunction() {


        fetch('http://graph-it.cesi.group/Equipes', {
            method: 'GET',
            dataType: 'json',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
        })
            .then((response) => {
                response.json()
                    .then((responseData) => {
                        //console.log(responseData)
                        setData(responseData)
                    });
            })
            .catch(function (err) {
                //console.log(err)
            })
    }
    var ViewContent = [];



    if (data != null) {
        for (var i = 0; i < data.length; i++) {

            var ViewContent2 = [];
            var ViewContent3 = [];
            const parameter = data[i].id

            if (data[i].competences.length === 0) {
                console.log('dans la boucle')
                ViewContent2.push(
                    <p>
                        Aucunes compétences enregistrées
                   </p>
                )
            }
            for (let j = 0; j < data[i].competences.length; j++) {
                ViewContent2.push(
                    <p>
                        {data[i].competences[j].Nom}
                    </p>
                )
            }

            if (data[i].realisations.length === 0) {
                ViewContent3.push(
                    <p>
                        Aucunes réalisations enregistrées
                   </p>
                )
            }
            for (let j = 0; j < data[i].realisations.length; j++) {
                ViewContent3.push(
                    <p>
                        {data[i].realisations[j].TitreR}
                    </p>)
            }

            ViewContent.push(

                <div className="all">


                    <div className="card2">
                        <div className="imgBx">
                            <img src={'http://graph-it.cesi.group' + data[i].Photo.url} />
                        </div>
                        <div className="content2">
                            <h2>{data[i].Nom} {data[i].Prenom}</h2>
                            <p>{data[i].Formation}</p>
                            <div className="competences">{ViewContent2}</div>
                        </div>
                    </div>

                </div>



            )


        }
    }

    else {
        getEquipeFunction();
    }




    return (



        <div className="container2">

            {ViewContent}

        </div>

    );
}


export default GetEquipe
