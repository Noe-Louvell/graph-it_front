import React, { useState } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css'
import './getArticle.css';
import Table from 'react-bootstrap/Table'
import Avatar from '@material-ui/core/Avatar';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import VisibilityIcon from '@material-ui/icons/Visibility';
import IconButton from '@material-ui/core/IconButton';



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

               <tr>
                   <td>{data[i].TitreA}</td>
                   <td>{data[i].DescriptionA}</td>
                   <td><IconButton color="inherit"> <VisibilityIcon/>
                   </IconButton> <IconButton color="inherit"> <EditIcon/> </IconButton>
                       <IconButton color="inherit"> <DeleteIcon/> </IconButton></td>
               </tr>

           )
       }
   }
   else {
       getArticleFunction();}


  return (
      <div>

          <Table striped bordered hover>
              <thead>
                  <tr>
                      <th>Titre</th>
                      <th>Description</th>
                      <th>Action</th>
                  </tr>
              </thead>
              <tbody>
                  {ViewContent}
              </tbody>
          </Table>




      </div>

  );
}


export default GetArticle
