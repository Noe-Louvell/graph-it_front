import React, { useState } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css'
import './getArticle.css';
import Table from 'react-bootstrap/Table'
import Avatar from '@material-ui/core/Avatar';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import VisibilityIcon from '@material-ui/icons/Visibility';
import IconButton from '@material-ui/core/IconButton';
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
import Tooltip from '@material-ui/core/Tooltip';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import FilterListIcon from '@material-ui/icons/FilterList';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';
import CardMedia from '@material-ui/core/CardMedia';




function GetArticle() {


  const [data, setData] = useState(null);

    const [open, setOpen] = React.useState(false);
    const [open2, setOpen2] = React.useState(false);
    const [open3, setOpen3] = React.useState(false);
    const [open4, setOpen4] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };
    const handleClickOpen2 = () => {
        setOpen2(true);
    };
    const handleClose2 = () => {
        setOpen2(false);
    };
    const handleClickOpen3 = () => {
        setOpen3(true);
    };
    const handleClose3 = () => {
        setOpen3(false);
    };
    const handleClickOpen4 = () => {
        setOpen4(true);
    };
    const handleClose4 = () => {
        setOpen4(false);
    };

    const useStyles = makeStyles({
        table: {
            minWidth: 700,
        },

    });

    const useStyles2 = makeStyles((theme) => ({
        root: {
            '& > *': {
                margin: theme.spacing(1),
            },
        },
        input: {
            display: 'none',
        },
    }));

    const classes = useStyles2();

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
                   <td><div>
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
                                   Preview du résultat
                               </DialogContentText>
                           </DialogContent>
                           <DialogActions>
                               <Button onClick={handleClose} color="primary">
                                   Annuler
                               </Button>
                               <Button onClick={handleClose} color="primary" autoFocus>
                                   Valider
                               </Button>
                           </DialogActions>
                       </Dialog>
                   </div>
                       <div>
                           <IconButton variant="outlined" color="primary" onClick={handleClickOpen2}>
                               <DeleteIcon/>
                           </IconButton>
                           <Dialog
                               open={open2}
                               onClose={handleClose2}
                               aria-labelledby="alert-dialog-title"
                               aria-describedby="alert-dialog-description"
                           >
                               <DialogTitle id="alert-dialog-title">{"Supprimer"}</DialogTitle>
                               <DialogContent>
                                   <DialogContentText id="alert-dialog-description">
                                       Est-vous sur ?
                                   </DialogContentText>
                               </DialogContent>
                               <DialogActions>
                                   <Button onClick={handleClose2} color="primary">
                                       NON
                                   </Button>
                                   <Button onClick={handleClose2} color="primary" autoFocus>
                                       OUI
                                   </Button>
                               </DialogActions>
                           </Dialog>
                       </div>
                       <div>
                           <IconButton variant="outlined" color="primary" onClick={handleClickOpen4}>
                               <EditIcon/>
                           </IconButton>
                           <Dialog
                               open={open4}
                               onClose={handleClose4}
                               aria-labelledby="alert-dialog-title"
                               aria-describedby="alert-dialog-description"
                           >
                               <DialogTitle id="alert-dialog-title">{"Modifier"}</DialogTitle>
                               <DialogContent>
                                   <DialogContentText id="alert-dialog-description">
                                       appliquer les modifications
                                   </DialogContentText>
                                   <TextField
                                       autoFocus
                                       margin="dense"
                                       id="Titre"
                                       label="Titre"
                                       type="Title"
                                       defaultValue={data[i].TitreA}
                                       fullWidth
                                   />
                                   <TextField
                                       autoFocus
                                       margin="dense"
                                       id="name"
                                       label="Contenu"
                                       type="Text"
                                       defaultValue={data[i].DescriptionA}
                                       fullWidth
                                   />
                               </DialogContent>
                               <DialogActions>
                                   <Button onClick={handleClose4} color="primary">
                                       Annuler
                                   </Button>
                                   <Button onClick={handleClose4} color="primary" autoFocus>
                                       Valider
                                   </Button>
                               </DialogActions>
                           </Dialog>
                       </div></td>
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
