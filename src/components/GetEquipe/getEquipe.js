import React, { useState } from 'react';
import { NavLink  } from "react-router-dom";

import Nav from 'react-bootstrap/Nav'
import 'bootstrap/dist/css/bootstrap.min.css'
import './getEquipe.css';
import logo_1 from '../../assets/img/logo_1.png'


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
                       <p className="Nom"> {data[i].Nom}</p>
                       <p className="Prenom"> {data[i].Prenom}</p>
                       <img src={'http://graph-it.cesi.group' + data[i].Photo.url}  className="Avatar"/>
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
