import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'

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
import Fab from '@material-ui/core/Fab';
import CardMedia from '@material-ui/core/CardMedia';
import PostRealisation from '../PostRealisation/PostRealisation';
import DelEquipe from '../DelEquipe/DelEquipe';
import AddEquipe from '../AddEquipe/AddEquipe';
import UpdateEquipe from '../UpdateEquipe/UpdateEquipe';



function GetEquipeD() {

  const [openView, setOpenView] = React.useState(false);
  const [openDel, setOpenDel] = React.useState(false);
  const [openAdd, setOpenAdd] = React.useState(false);
  const [openEdit, setOpenEdit] = React.useState(false);


  const handleClickOpenView = () => {
    setOpenView(true);
  };
  const handleCloseView = () => {
    setOpenView(false);
  };
  const handleClickOpenDel = () => {
    setOpenDel(true);
  };
  const handleCloseDel = () => {
    setOpenDel(false);
  };

  const handleClickOpenAdd = () => {
    setOpenAdd(true);
  };
  const handleCloseAdd = () => {
    setOpenAdd(false);
  };
  const handleClickOpenEdit = () => {
    setOpenEdit(true);
  };
  const handleCloseEdit = () => {
    setOpenEdit(false);
  };

  const EquipeAdd = (id) => {
    console.log(id);
    AddEquipe(id);
    handleCloseAdd();
  }

  const EquipeUpdate = (id) => {
    console.log(id);
    UpdateEquipe(id);
    handleCloseEdit();
  }

  const EquipeDelete = (id) => {
    console.log(id);
    DelEquipe(id);
    handleCloseDel();
  }



  const [rowData, setRowData] = useState(null);
  const [data, setData] = useState(null);


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
          <td> 
            <div>
              <Fab onClick={handleClickOpenAdd} color="primary" aria-label="add">
                <AddIcon />
              </Fab>
              <Dialog
                key={"Adddel-" + id}
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
                    label="Contenu"
                    type="Text"
                    fullWidth
                  />
                </DialogContent>
                <DialogActions>
                  <Button onClick={handleCloseAdd} color="primary">
                    Annuler
                      </Button>
                  <Button key={"btndel-" + id} onClick={EquipeAdd.bind(this, id)} color="primary" autoFocus>
                    Valider
                      </Button>
                </DialogActions>
              </Dialog>
            </div>
            


            <div>
              <IconButton variant="outlined" color="primary" onClick={handleClickOpenDel}>
                <DeleteIcon />
              </IconButton>
              <Dialog
                key={"dialdel-" + id}
                open={openDel}
                onClose={handleCloseDel}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
              >
                <Button onClick={handleCloseDel} color="primary">
                  NON
                               </Button>
                <Button key={"btndel-" + id} onClick={EquipeDelete.bind(this, id)} color="primary" autoFocus>
                  OUI
                               </Button>
                <div onClick={EquipeDelete.bind(this, id)}></div>
                <Button onClick={handleCloseDel} color="primary" autoFocus>
                  retour
                               </Button>
              </Dialog>
              <Dialog
                key={"dialdel-" + id}
                open={openDel}
                onClose={handleCloseDel}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
              >
                <DialogTitle id="alert-dialog-title">{"Supprimer"}</DialogTitle>
                <DialogContent>
                  <DialogContentText id="alert-dialog-description">
                    Êtes-vous sûr de vouloir supprimer? {id}
                   </DialogContentText>
                </DialogContent>
                <DialogActions>
                  <Button onClick={handleCloseDel} color="primary">
                    NON
                                   </Button>
                  <Button key={"btndel-" + id} onClick={EquipeDelete.bind(this, id)} color="primary" autoFocus>
                    OUI
                                   </Button>
                </DialogActions>
              </Dialog>
            </div>


            <div>
              <IconButton variant="outlined" color="primary" onClick={handleClickOpenEdit}>
                <EditIcon />
              </IconButton>

              <Dialog
                open={openEdit}
                onClose={handleCloseEdit}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
              >
                <DialogTitle id="alert-dialog-title">{"Modifier"}</DialogTitle>
                <DialogContent>
                  <DialogContentText id="alert-dialog-description">
                    Appliquer les modifications  {id}
                                   </DialogContentText>
                  <TextField
                    rowData={rowData}
                    autoFocus
                    margin="dense"

                    label="Nom"
                    type="Title"
                    defaultValue=''
                    fullWidth
                  />
                  <TextField
                    autoFocus
                    margin="dense"

                    label="Prenom"
                    type="Text"
                    defaultValue=''
                    fullWidth
                  />
                </DialogContent>
                <DialogActions>
                  <Button onClick={handleCloseEdit} color="primary">
                    Annuler
                                   </Button>
                  <Button key={"btndel-" + id} onClick={EquipeUpdate.bind(this, id)} color="primary" autoFocus>
                    Valider
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
    getEquipeFunction();
  }


  return (

    <div>

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
