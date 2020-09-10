import React, { useState } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css'
import './getRéalisation.css';



function GetRéalisation() {



  const [data, setData] = useState(null);
 function getRéalisationFunction() {


         fetch('http://graph-it.cesi.group/Realisations', {
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

                      <div className="CardText">
                        <p className="Nom"> {data[i].TitreR}</p>


                      </div>




           )
       }
   }
   else {
       getRéalisationFunction();}


  return (



            <div className="boxPersonne">

            {ViewContent}

            </div>

  );
}


export default GetRéalisation
