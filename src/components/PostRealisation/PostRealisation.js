    import React, { useState } from 'react';
    import { withStyles, lighten, makeStyles } from '@material-ui/core/styles';
    import TextField from '@material-ui/core/TextField';
    import Dialog from '@material-ui/core/Dialog';
    import DialogActions from '@material-ui/core/DialogActions';
    import DialogContent from '@material-ui/core/DialogContent';
    import DialogContentText from '@material-ui/core/DialogContentText';
    import DialogTitle from '@material-ui/core/DialogTitle';
    import Button from '@material-ui/core/Button';
    import InputLabel from '@material-ui/core/InputLabel';
    import MenuItem from '@material-ui/core/MenuItem';
    import FormHelperText from '@material-ui/core/FormHelperText';
    import FormControl from '@material-ui/core/FormControl';
    import Select from '@material-ui/core/Select';
import './PostRealisation.css';



export default function PostRealisation (props){

    const [openAdd, setOpenAdd] = React.useState(null);

    const ClickOpenAdd = () => {
        setOpenAdd(true);
    };
    const CloseAdd = () => {
        setOpenAdd(false);
    };

    const handleAdd = () => {
        add();
        CloseAdd();
    }

    const [inp_Titre, setInpTitre] = useState('')
    const [inp_Date, setInpDate] = useState('')
    const [inp_Image, setInpImage] = useState('')
    const [inp_TypeReal, setInpTypeReal] = useState('')
    const [inp_Description, setInpDescription] = useState('')
    const [inp_Subtitle, setInpSubtitle] = useState('')

    const [errorTitre, setErrorTitre] = useState('none')
    const [errorDate, setErrorDate] = useState('none')
    const [errorimage, setErrorimage] = useState('none')
    const [errorTypeReal, setErrorTypeReal] = useState('none')
    const [errorDescription, setErrorDescription] = useState('none')
    const [errorSubtitle, setErrorSubtitle] = useState('none')

    const [displayError, setDisplayError] = useState('')


    function add(){
        console.log({
            TitreR: inp_Titre,
            DateR: inp_Date,
            ImageR: inp_Image,
            TypeR: inp_TypeReal,
            DescriptionR: inp_Description,
            SubtitleR: inp_Subtitle,
        })
        fetch("http://graph-it.cesi.group/Realisations", {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify({
                TitreR: inp_Titre,
                DateR: inp_Date,
                ImageR: inp_Image,
                TypeR: inp_TypeReal,
                DescriptionR: inp_Description,
                SubtitleR: inp_Subtitle,
            })
        }).then((res) => console.log(res.json()))
    }

    return(
        <Dialog
            open={props.data != null}
            onClose={props.CloseAdd}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
        >
            <DialogTitle id="alert-dialog-title">{"Ajout"}</DialogTitle>
            <DialogContent>
                <TextField
                    autoFocus
                    margin="dense"
                    id="Titre"
                    label="Titre"
                    type="Title"
                    defaultValue= ""
                    onChange={(event)=> setInpTitre(event.target.value)}
                    fullWidth
                />

                <label htmlFor="contained-button-file">
                    <input
                        accept="image/*"
                        id="contained-button-file"
                        multiple
                        type="file"
                        onChange={(event)=> setInpImage(event.target.files[0])}
                    />
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
                    defaultValue= ""
                        onChange={(event)=> setInpSubtitle(event.target.value)}
                    fullWidth
                />
                <form className={props.Style2} noValidate>
                    <TextField
                        id="date"
                        label="Date"
                        type="date"
                        defaultValue= {new Date()}
                        onChange={(event)=> setInpDate(event.target.value)}
                        className={props.Style2}
                        InputLabelProps={{
                            shrink: true,
                        }}
                    />
                </form>
                <FormControl >
                    <InputLabel id="demo-simple-select-label">Type de projet</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        onChange={(event)=> setInpTypeReal(event.target.value)}
                    >
                        <MenuItem value={"ApplicationMobile"}>Application Mobile</MenuItem>
                        <MenuItem value={"SiteWeb"}>Site Web</MenuItem>
                    </Select>
                </FormControl>
                <TextField
                    autoFocus
                    margin="dense"
                    id="name"
                    label="Description"
                    type="Text"
                    defaultValue= ""
                    onChange={(event)=> setInpDescription(event.target.value)}
                    fullWidth
                />
            </DialogContent>
            <DialogActions>
                <Button onClick={props.CloseAdd} color="primary">
                    Annuler
                </Button>
                <Button onClick={add} color="primary" autoFocus>
                    Valider
                </Button>
            </DialogActions>
        </Dialog>
    )
}


