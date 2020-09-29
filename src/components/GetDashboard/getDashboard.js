import React, { useState } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css'
import './getDashboard.css';
import Table from 'react-bootstrap/Table'



function GetDashboard() {



  const [data, setData] = useState(null);
 function getDashboardFunction() {


         fetch('http://graph-it.cesi.group/Clients', {
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

            ViewContent.push(




              );



       }
   }

   else {
       getDashboardFunction();}




  return (
    <div>






      </div>








  );
}


export default GetDashboard
