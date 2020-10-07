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
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import 'date-fns';
import DateFnsUtils from '@date-io/date-fns';
import Grid from '@material-ui/core/Grid';
import Fab from '@material-ui/core/Fab';
import {
    MuiPickersUtilsProvider,
    KeyboardTimePicker,
    KeyboardDatePicker,
} from '@material-ui/pickers';
import CardMedia from '@material-ui/core/CardMedia';
import PostRealisation from '../PostRealisation/PostRealisation';
import PutRealisation from '../PutRealisation/PutRealisation';
import DelRealisation from '../DelRealisation/DelRealisation';

function GetRealisation() {

    function refreshPage() {
        window.location.reload(true);
    }

    const [selectedDate, setSelectedDate] = React.useState(new Date());

    const handleDateChange = (date) => {
        setSelectedDate(date);
    };

    const [openView, setOpenView] = React.useState(null);
    const [openDel, setOpenDel] = React.useState(null);
    const [openAdd, setOpenAdd] = React.useState(null);
    const [openEdit, setOpenEdit] = React.useState(null);


    const handleClickOpenView = () => {
        setOpenView(true);
    };

    const handleCloseView = () => {
        setOpenView(false);
    };

    const handleClickOpenDel = (item) => {
        setOpenDel(item);
    };

    const handleCloseDel = () => {
        setOpenDel(null);
        refreshPage();
    };

    const handleDelete = (id) => {
        console.log(id);
        DelRealisation(id);
        handleCloseDel();
    }
    
    const ClickOpenAdd = () => {
        setOpenAdd(true);
    };
    const CloseAdd = () => {
        setOpenAdd(false);
    };

    const handleAdd = () => {
        PostRealisation();
        CloseAdd();
    }

    const handleClickOpenEdit = (item) => {
        setOpenEdit(item);
    };

    const handleUpdate = (id) => {
        console.log(id);
        PutRealisation(id);
        handleClickOpenEdit();
    }

    const handleCloseEdit = () => {
        setOpenEdit(null);
    };

    const [rowData, setRowData] = useState(null);



    const [data, setData] = useState(null);


    const useStyles = makeStyles({
        table: {
            minWidth: 700,
        },
        root: {
            maxWidth: 345,
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


    const useStyles3 = makeStyles((theme) => ({
        container: {
            display: 'flex',
            flexWrap: 'wrap',
        },
        textField: {
            marginLeft: theme.spacing(1),
            marginRight: theme.spacing(1),
            width: 200,
        },
    }));


    const classes = useStyles2();

    const classes3 = useStyles3();

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

    function checkRealisation(){

    }


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
           let id = data[i].id;
           console.log("id", id)
           ViewContent.push(
               <tr key={"row-" + id}>
                   <td>{data[i].TitreR}</td>
                   <td><img src={'http://graph-it.cesi.group' + data[i].ImageR.url} width="150em" height="150em"/></td>
                   <td>{data[i].DescriptionR}</td>
                   <td> <div>
                       <IconButton variant="outlined" color="primary" onClick={handleClickOpenView}>
                           <VisibilityIcon/>
                       </IconButton>
                       <Dialog
                           open={openView}
                           onClose={handleCloseView}
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
                               <Button onClick={handleCloseView} color="primary">
                                   Annuler
                               </Button>
                               <Button onClick={handleCloseView} color="primary" autoFocus>
                                   Valider
                               </Button>
                           </DialogActions>
                       </Dialog>
                   </div>
                       <div>
                           <IconButton variant="outlined" color="primary" onClick={handleClickOpenDel.bind(this, data[i])}>
                               <DeleteIcon/>
                           </IconButton>

                       </div>
                       <div>
                           <IconButton variant="outlined" color="primary" onClick={handleClickOpenEdit.bind(this, data[i])}>
                               <EditIcon/>
                           </IconButton>
                       </div>
                       
                    </td>

               </tr>



           );
       }
   }
   else {
       getRealisationFunction();}

console.log(PostRealisation.inp_Titre)
  return (

      <div>
          <div>
              <Fab  onClick={ClickOpenAdd} color="primary" aria-label="add">
                  <AddIcon />
              </Fab>
             <PostRealisation data={openAdd} CloseAdd={CloseAdd} />
          </div>
          <Dialog
              key={"dialdel"}
              open={openDel !=null}
              onClose={handleCloseDel}
              aria-labelledby="alert-dialog-title"
              aria-describedby="alert-dialog-description"
          >
              <DialogTitle id="alert-dialog-title">{"Supprimer"}</DialogTitle>
              <DialogContent>
                  <DialogContentText id="alert-dialog-description">
                      Est-vous sur de supprimer? {openDel != null ? openDel.id : null }
                  </DialogContentText>
              </DialogContent>
              <DialogActions>
                  <Button onClick={handleCloseDel} color="primary">
                      NON
                  </Button>
                  <Button onClick={handleDelete.bind(this, openDel != null ? openDel.id : null )} color="primary" autoFocus>
                      OUI
                  </Button>
              </DialogActions>
          </Dialog>
          <Dialog
              open={openEdit !=null}
              onClose={handleCloseEdit}
              aria-labelledby="alert-dialog-title"
              aria-describedby="alert-dialog-description"
          >
              <DialogTitle id="alert-dialog-title">{"Modifier"}</DialogTitle>
              <DialogContent>
                  <DialogContentText id="alert-dialog-description">
                      appliquer les modifications
                  </DialogContentText>
                  <TextField
                      rowData={rowData}
                      autoFocus
                      margin="dense"
                      id="Titre"
                      label="Titre"
                      type="Title"
                      defaultValue=""
                      fullWidth
                  />
                  <TextField
                      autoFocus
                      margin="dense"
                      id="name"
                      label="Contenu"
                      type="Text"
                      defaultValue=""
                      fullWidth
                  />
              </DialogContent>
              <DialogActions>
                  <Button onClick={handleCloseEdit} color="primary">
                      Annuler
                  </Button>
                  <Button onClick={handleUpdate.bind(this, openDel != null ? openDel.TitreR  : null ? openDel.SubtitleR  : null )} color="primary" autoFocus>
                      Valider
                  </Button>
              </DialogActions>
          </Dialog>
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




      </div>


  );
}



export default GetRealisation
