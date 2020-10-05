import React, { useState } from 'react';
import './getRealisation.css';



function GetRealisation() {



  const [data, setData] = useState(null);
 function getRealisationFunction() {


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

                    <div className="CardReal">
                        <img src={'http://graph-it.cesi.group' + data[i].ImageR.url} width="450em" height="250em"/>
                    </div>
                    
                    
           )
       }
   }
   else {
       getRealisationFunction();}


  return (

        <div className="CardReal">

            {ViewContent}
        
        </div>

  );
}


export default GetRealisation
//<span className="TitreReal"> {data[i].TitreR}</span>