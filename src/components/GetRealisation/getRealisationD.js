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
import Fab from '@material-ui/core/Fab';
import CardMedia from '@material-ui/core/CardMedia';
import PostRealisation from '../PostRealisation/PostRealisation';
import PutRealisation from '../PutRealisation/PutRealisation';
import DelRealisation from '../DelRealisation/DelRealisation';

function GetRealisation() {

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

    const handleDelete = (id) => {
        console.log(id);
        DelRealisation(id);
        handleCloseDel();
    }
    
    const handleClickOpenAdd = () => {
        setOpenAdd(true);
    };
    const handleCloseAdd = () => {
        setOpenAdd(false);
    };
    const handleClickOpenEdit = () => {
        setOpenEdit(true);
    };

    const handleUpdate = (id) => {
        console.log(id);
        PutRealisation(id);
        handleClickOpenEdit();
    }

    const handleCloseEdit = () => {
        setOpenEdit(false);
    };

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
                   <td><CardMedia
                       image= {{uri:'http://graph-it.cesi.group'+data[i].ImageR.url}}
                   /></td>
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
                           <IconButton variant="outlined" color="primary" onClick={handleClickOpenDel}>
                               <DeleteIcon/>
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
                               <Button key={"btndel-" + id} onClick={handleDelete.bind(this, id)} color="primary" autoFocus>
                                   OUI
                               </Button>
                           <div onClick={handleDelete.bind(this, id)}></div>
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
                                       Est-vous sur de supprimer?
                                   </DialogContentText>
                               </DialogContent>
                               <DialogActions>
                                   <Button onClick={handleCloseDel} color="primary">
                                       NON
                                   </Button>
                                   <Button key={"btndel-" + id} onClick={handleDelete.bind(this, id)} color="primary" autoFocus>
                                       OUI
                                   </Button>
                               </DialogActions>
                           </Dialog>
                       </div>
                       <div>
                           <IconButton variant="outlined" color="primary" onClick={handleClickOpenEdit}>
                               <EditIcon/>
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
                                       appliquer les modifications
                                   </DialogContentText>
                                   <TextField
                                       rowData={rowData}
                                       autoFocus
                                       margin="dense"
                                       id="Titre"
                                       label="Titre"
                                       type="Title"
                                       defaultValue= 'ex'
                                       fullWidth
                                   />
                                   <TextField
                                       autoFocus
                                       margin="dense"
                                       id="name"
                                       label="Contenu"
                                       type="Text"
                                       defaultValue={data[i].DescriptionR}
                                       fullWidth
                                   />
                               </DialogContent>
                               <DialogActions>
                                   <Button onClick={handleCloseEdit} color="primary">
                                      Annuler
                                   </Button>
                                   <Button onClick={handleCloseEdit} color="primary" autoFocus>
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
       getRealisationFunction();}


  return (

      <div>
          <div>
              <Fab  onClick={handleClickOpenAdd} color="primary" aria-label="add">
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
                          label="Contenu"
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
