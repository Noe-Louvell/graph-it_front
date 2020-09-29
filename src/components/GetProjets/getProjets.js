import React, { useState } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css'
import './getProjets.css';
import Table from 'react-bootstrap/Table'



function GetProjets() {



  const [data, setData] = useState(null);
  function getProjetsFunction() {


    fetch('http://graph-it.cesi.group/Projets', {
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

        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Titre du Projet</th>
              <th>Type du Projet</th>
              <th>Date de début prévue</th>
              <th>Date de fin prévue</th>
              <th>Description du projet</th>
              <th>Référent du projet</th>
              <th>Téléphone du référent</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{data[i].TitreDuProjet}</td>
              <td>{data[i].TypeDuProjet}</td>
              <td>{data[i].DateDuDebut}</td>
              <td>{data[i].DateDeFin}</td>
              <td>{data[i].DescriptionDuProjet}</td>
              <td>{data[i].ReferentDuProjet}</td>
              <td>{data[i].TelephoneDuReferent}</td>
            </tr>
          </tbody>
        </Table>


      );



    }
  }

  else {
    getProjetsFunction();
  }




  return (
    <div>

          {ViewContent}

    </div>








  );
}


export default GetProjets
