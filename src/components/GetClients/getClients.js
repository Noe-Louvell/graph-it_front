import React, { useState } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css'
import './getClients.css';
import Table from 'react-bootstrap/Table'



function GetClients() {

    

  const [data, setData] = useState(null);
 function getClientsFunction() {


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
               
              <tr>
              <td>{data[i].NomC}</td>
              <td>{data[i].NomSociete}</td>
              <td>{data[i].MailC}</td>
              <td>{data[i].TypeC}</td>
              </tr>
          
          
              );
           
         
           
       }
   }
 
   else {
       getClientsFunction();}

   


  return (
    <div>

<Table striped bordered hover>
  <thead>
    <tr>
      <th>NomC</th>
      <th>NomSociete</th>
      <th>MailC</th>
      <th>TypeC</th>
    </tr>
  </thead>
  <tbody>
  {ViewContent}
        
  </tbody>
</Table>
    
        
          
      
      </div>


            

            

            

  );
}


export default GetClients
