import React, { useState } from 'react';
import { BiWorld } from 'react-icons/bi';
import 'bootstrap/dist/css/bootstrap.min.css'
import Card from 'react-bootstrap/Card'
import CardDeck from 'react-bootstrap/CardDeck'
import { MdLanguage } from "react-icons/md";
import './getService.css';



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

            
            <Card border="light" style={{ width: '18rem'}}>
            
            <Card.Body>
              <Card.Title><div className="titreicone"><div className="icone"><MdLanguage/></div><div><br/>{data[i].Titre}</div></div></Card.Title>
              <Card.Text>
                {data[i].Description}
              </Card.Text>
            </Card.Body>
            </Card>
            

      

           )
       }
   }
   else {
       getServiceFunction();}


  return (

            <CardDeck>

            {ViewContent}

            </CardDeck>

  );
}


export default GetService
