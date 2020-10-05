import React, { useState } from 'react';
import './getArticle.css';



function GetArticle() {



  const [data, setData] = useState(null);
 function getArticleFunction() {


         fetch('http://graph-it.cesi.group/Articles', {
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

                      <div className="CardArticle">
                      <img src={'http://graph-it.cesi.group' + data[i].ImageA.url} width="450em" height="250em"/>
                      </div>
                      




           )
       }
   }
   else {
       getArticleFunction();}


  return (



            <div className="CardArticle">

            {ViewContent}

            </div>

  );
}


export default GetArticle
