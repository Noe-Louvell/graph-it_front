import React, { useState } from 'react';
import { BiWorld } from 'react-icons/bi';
import 'bootstrap/dist/css/bootstrap.min.css'




function GetService() {



  const [data, setData] = useState(null);
 function getServiceFunction() {


         fetch('http://graph-it.cesi.group/Services', {
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

             <div className="service">
               <i className="fa fa-globe"><BiWorld/></i>
               <h4 className="titre-nosServices"><p className="Titre"> {data[i].Titre}</p></h4>
               <p className="descriptionText-nosServices">
               <p className="Description">{data[i].Description}</p>
               </p>
             </div>

           )
       }
   }
   else {
       getServiceFunction();}


  return (



            <div className="services">

            {ViewContent}

            </div>

  );
}


export default GetService
