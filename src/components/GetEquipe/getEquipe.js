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
     console.log(data);


   if (data != null) {
       for (var i = 0; i < data.length; i++) {
           //console.log(data[i].Photo.url)
           ViewContent.push(

                   <div className="CardEquipe">
                    <div className="CardImg">
                      <img src={'http://graph-it.cesi.group' + data[i].Photo.url}  className="Avatar" alt="Avatar"/>
                    </div>

                      <div className="CardText">
                        <p className="Nom"> {data[i].Nom}</p>
                        <p className="Prenom"> {data[i].Prenom}</p>

                      </div>
                        <p className="Formation">{data[i].Formation}</p>            

                   </div>

           )
       }
   }
   else {
       getEquipeFunction();}


  return (



            <div className="boxPersonne">

            {ViewContent}

            </div>

  );
}


export default GetEquipe
