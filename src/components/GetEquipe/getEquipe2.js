import React, { useState } from 'react';
import './getEquipe.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Card from 'react-bootstrap/Card'
import CardDeck from 'react-bootstrap/CardDeck'




function GetEquipe2() {



  const [data, setData] = useState(null);
 function getEquipe2Function() {


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

           if(data[i].competences.length === 0){
               console.log('dans la boucle')
               ViewContent2.push(
                   <p>
                       Aucunes compétences enregistrées
                   </p>
               )
           }
           for(let j=0 ; j<data[i].competences.length;j++){
               ViewContent2.push(
                   <p>
                       {data[i].competences[j].Nom}
                   </p>
               )
           }

           if(data[i].realisations.length === 0){
               ViewContent3.push(
                   <p>
                       Aucunes réalisations enregistrées
                   </p>
               )
           }
           for(let j=0 ; j<data[i].realisations.length;j++){
               ViewContent3.push(
                   <p>
                       {data[i].realisations[j].TitreR}
                   </p>)}

           ViewContent.push(

             <div className="">

                                <Card>
                                    <Card.Img variant="top" src={'http://graph-it.cesi.group' + data[i].Photo.url} className="Avatar2"  alt="Avatar" />
                                    <Card.Body>
                                    <Card.Title><h3 className="Nom"> {data[i].Nom}</h3><h3 className="Prenom"> {data[i].Prenom}</h3></Card.Title>
                                    <Card.Text>
        
                                    </Card.Text>
                                    </Card.Body>
                                    <Card.Footer>
                                    <small className="text-muted">Last updated 3 mins ago</small>
                                    </Card.Footer>
                                </Card>




                    </div>


           )


       }
   }

   else {
       getEquipe2Function();}




  return (

    <CardDeck>{ViewContent}</CardDeck>

    

          


    


  );
}


export default GetEquipe2
