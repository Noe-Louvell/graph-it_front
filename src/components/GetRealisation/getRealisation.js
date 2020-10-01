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
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Button from '@material-ui/core/Button';


function GetRealisation() {

    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

  const [data, setData] = useState(null);

    function createData(name, calories, fat, carbs, protein) {
        return { name, calories, fat, carbs, protein };
    }


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
                   <td> <div>
                       <IconButton variant="outlined" color="primary" onClick={handleClickOpen}>
                           <VisibilityIcon/>
                       </IconButton>
                       <Dialog
                           open={open}
                           onClose={handleClose}
                           aria-labelledby="alert-dialog-title"
                           aria-describedby="alert-dialog-description"
                       >
                           <DialogTitle id="alert-dialog-title">{"Look"}</DialogTitle>
                           <DialogContent>
                               <DialogContentText id="alert-dialog-description">
                                   ta déja tout les info tu veut pas une loupe non plus
                               </DialogContentText>
                           </DialogContent>
                           <DialogActions>
                               <Button onClick={handleClose} color="primary">
                                   Disagree
                               </Button>
                               <Button onClick={handleClose} color="primary" autoFocus>
                                   Agree
                               </Button>
                           </DialogActions>
                       </Dialog>
                   </div>
                       
                    </td>

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
