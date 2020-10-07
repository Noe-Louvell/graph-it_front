import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'

import Table from 'react-bootstrap/Table'
import { withStyles, lighten, makeStyles } from '@material-ui/core/styles';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import IconButton from '@material-ui/core/IconButton';
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
import DateFnsUtils from '@date-io/date-fns';
import Grid from '@material-ui/core/Grid';
import Fab from '@material-ui/core/Fab';
import {
  MuiPickersUtilsProvider,
  
} from '@material-ui/pickers';

import DelEquipe from '../DelEquipe/DelEquipe';
import UpdateEquipe from '../UpdateEquipe/UpdateEquipe';

function GetEquipeD() {

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

  const [updateNom, setUpdateNom] = React.useState("");
  const [updatePrenom, setUpdatePrenom] = React.useState("");

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
    DelEquipe(id);
    handleCloseDel();
  }

  const handleClickOpenAdd = () => {
    setOpenAdd(true);
  };
  const handleCloseAdd = () => {
    setOpenAdd(false);
  };
  const handleClickOpenEdit = (item) => {
    setOpenEdit(item);
  };

  const handleUpdate = (id) => {
    console.log(id, updateNom,updatePrenom);
    UpdateEquipe(id, updateNom,updatePrenom);
    handleClickOpenEdit();
    refreshPage();
  }

  const handleCloseEdit = () => {
    setOpenEdit(null);
    refreshPage();

  };

  const [rowData, setRowData] = useState(null);

  


  const [data, setData] = useState(null);
  
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
  console.log(data);

  if (data != null) {
    for (var i = 0; i < data.length; i++) {
      //console.log(data[i].Photo.url)
      let id = data[i].id;
      console.log("id", id)
      ViewContent.push(
        <tr key={"row-" + id}>
          <td>{data[i].Nom}</td>
          
          <td>{data[i].Prenom}</td>
          <td> <div>
            <IconButton variant="outlined" color="primary" onClick={handleClickOpenView}>
              <VisibilityIcon />
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
                <DeleteIcon />
              </IconButton>

            </div>
            <div>
              <IconButton variant="outlined" color="primary" onClick={handleClickOpenEdit.bind(this, data[i])}>
                <EditIcon />
              </IconButton>
            </div>

          </td>

        </tr>



      );
    }
  }
  else {
    getEquipeFunction();
  }


  return (

    <div>
      <div>
        <Fab onClick={handleClickOpenAdd} color="primary" aria-label="add">
          <AddIcon />
        </Fab>
        <Dialog
          open={openAdd}
          onClose={handleCloseAdd}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">{"AJout"}</DialogTitle>
          <DialogContent>
            <TextField
              autoFocus
              margin="dense"
              id="Titre"
              label="Titre"
              type="Title"
              fullWidth
            />
            <input
              accept="image/*"
              className={classes.input}
              id="contained-button-file"
              multiple
              type="file"
            />
            <label htmlFor="contained-button-file">
              <Button variant="contained" color="primary" component="span">
                Upload
                          </Button>
            </label>
            <TextField
              autoFocus
              margin="dense"
              id="name"
              label="Sous-titre"
              type="Text"
              fullWidth
            />
            <MuiPickersUtilsProvider utils={DateFnsUtils}> <Grid container justify="space-around">

            </Grid>
            </MuiPickersUtilsProvider>
            <TextField
              autoFocus
              margin="dense"
              id="name"
              label="Description"
              type="Text"
              fullWidth
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleCloseAdd} color="primary">
              Annuler
                      </Button>
            <Button onClick={handleCloseAdd} color="primary" autoFocus>
              Valider
                      </Button>
          </DialogActions>
        </Dialog>
      </div>
      <Dialog
        key={"dialdel"}
        open={openDel != null}
        onClose={handleCloseDel}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"Supprimer"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
          Êtes-vous sûr de vouloir supprimer ? {openDel != null ? openDel.id : null}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDel} color="primary">
            NON
                  </Button>
          <Button onClick={handleDelete.bind(this, openDel != null ? openDel.id : null)} color="primary" autoFocus>
            OUI
                  </Button>
        </DialogActions>
      </Dialog>
      <Dialog
        open={openEdit != null}
        onClose={handleCloseEdit}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"Modifier"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Modification d'un equipier 
                  </DialogContentText>
          <TextField
            rowData={rowData}
            autoFocus
            margin="dense"
            id="Titre"
            label="Nom"
            type="Title"
            onChange={(event) => setUpdateNom(event.target.value)}
            fullWidth
          />
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Prenom"
            type="Text"
            onChange={(event) => setUpdatePrenom(event.target.value)}
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseEdit} color="primary">
            Annuler
                  </Button>
          <Button onClick={handleUpdate.bind(this, openEdit != null ? openEdit.id : null )} 
          color="primary" autoFocus>
            Valider
                  </Button>
        </DialogActions>
      </Dialog>
      <Table striped bordered hover>
        <thead>

          <tr>
            <th>Nom</th>
            <th>Prénom</th>
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



export default GetEquipeD
