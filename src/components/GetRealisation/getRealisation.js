import React, { useState } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css'
import './getRealisation.css';
import Table from 'react-bootstrap/Table'
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { withStyles, lighten, makeStyles } from '@material-ui/core/styles';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import TableSortLabel from '@material-ui/core/TableSortLabel';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import FilterListIcon from '@material-ui/icons/FilterList';
import Avatar from '@material-ui/core/Avatar';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import VisibilityIcon from '@material-ui/icons/Visibility';


function GetRealisation() {



  const [data, setData] = useState(null);

    function createData(name, calories, fat, carbs, protein) {
        return { name, calories, fat, carbs, protein };
    }

    const rows = [
        createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
        createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
        createData('Eclair', 262, 16.0, 24, 6.0),
        createData('Cupcake', 305, 3.7, 67, 4.3),
        createData('Gingerbread', 356, 16.0, 49, 3.9),
    ];

    const useStyles = makeStyles({
        table: {
            minWidth: 700,
        },
    });

    const StyledTableCell = withStyles((theme) => ({
        head: {
            backgroundColor: theme.palette.common.black,
            color: theme.palette.common.white,
        },
        body: {
            fontSize: 14,
        },
    }))(TableCell);

    const StyledTableRow = withStyles((theme) => ({
        root: {
            '&:nth-of-type(odd)': {
                backgroundColor: theme.palette.action.hover,
            },
        },
    }))(TableRow);

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

               <tr>
                   <td>{data[i].TitreR}</td>
                   <td><Avatar src={{uri:'http://graph-it.cesi.group'+data[i].ImageR.url}}/></td>
                   <td>{data[i].DescriptionR}</td>
                   <td><IconButton color="inherit"> <VisibilityIcon/>
                   </IconButton> <IconButton color="inherit"> <EditIcon/> </IconButton>
                       <IconButton color="inherit"> <DeleteIcon/> </IconButton></td>
               </tr>




           );
       }
   }
   else {
       getRealisationFunction();}


  return (

      <div>

          <Table striped bordered hover>
              <thead>
                  <tr>
                      <th>Titre</th>
                      <th>Image</th>
                      <th>Description</th>
                      <th>Action</th>
                  </tr>
              </thead>
              <tbody>
                  {ViewContent}

              </tbody>
          </Table>

          <TableContainer component={Paper}>
              <Table  aria-label="customized table">
                  <TableHead>
                      <TableRow>
                          <StyledTableCell align="center">Titre</StyledTableCell>
                          <StyledTableCell align="center">Images</StyledTableCell>
                          <StyledTableCell align="center">Descriptions</StyledTableCell>
                          <StyledTableCell align="center">Action</StyledTableCell>
                      </TableRow>
                  </TableHead>
                  <TableBody>
                      {ViewContent}
                  </TableBody>
              </Table>
          </TableContainer>



      </div>


  );
}


export default GetRealisation
