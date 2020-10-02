import React, { useState } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css'

import Table from 'react-bootstrap/Table'



function GetEquipeD() {

    

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
           
            ViewContent.push(
               
              <tr>
              <td>{data[i].Nom}</td>
              <td>{data[i].Prenom}</td>
              
              </tr>
          
          
              );
           
         
           
       }
   }
 
   else {
       getEquipeFunction();}

   


  return (
    <div>

<Table striped bordered hover>
  <thead>
    <tr>
      <th>Nom</th>
      <th>Prénom</th>
     
    </tr>
  </thead>
  <tbody>
  {ViewContent}
        
  </tbody>
</Table>
    
        
          
      
      </div>


            

            

            

  );
}


export default GetEquipeD
