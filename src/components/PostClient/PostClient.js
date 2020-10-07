import React, { useState } from 'react';

import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';

import DialogTitle from '@material-ui/core/DialogTitle';
import Button from '@material-ui/core/Button';





export default function PostRealisation(props) {

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

    const [Nom, setNom] = useState('')
    const [Prenom, setPrenom] = useState('')
    const [NomSociete, setNomSociete] = useState('')
    const [Mail, setMail] = useState('')
    const [Numero, setNumero] = useState('')


    function add() {

        fetch("http://graph-it.cesi.group/Clients", {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify({
                NomC: Nom,
                PrenomC: Prenom,
                NomSociete: NomSociete,
                MailC: Mail,
                NumeroC: Numero,
            })
        }).then((res) => console.log(res.json()))
    }

    return (
        <Dialog
            open={props.data != null}
            onClose={CloseAdd}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
        >
            <DialogTitle id="alert-dialog-title">{"Ajout"}</DialogTitle>
            <DialogContent>
                <TextField
                    autoFocus
                    margin="dense"
                    id="Titre"
                    label="Nom"
                    type="Text"
                    defaultValue=""
                    onChange={(event) => setNom(event.target.value)}
                    fullWidth
                />

                <TextField
                    autoFocus
                    margin="dense"
                    id="name"
                    label="Prenom"
                    type="Text"
                    defaultValue=""
                    onChange={(event) => setPrenom(event.target.value)}
                    fullWidth
                />
                <TextField
                    autoFocus
                    margin="dense"
                    id="name"
                    label="Nom de la Societe"
                    type="Text"
                    defaultValue=""
                    onChange={(event) => setNomSociete(event.target.value)}
                    fullWidth
                />
                <TextField
                    autoFocus
                    margin="dense"
                    id="name"
                    label="Mail"
                    type="mail"
                    defaultValue=""
                    onChange={(event) => setMail(event.target.value)}
                    fullWidth
                />
                <TextField
                    autoFocus
                    margin="dense"
                    id="name"
                    label="Numero"
                    type="Text"
                    defaultValue=""
                    onChange={(event) => setNumero(event.target.value)}
                    fullWidth
                />
                

                
            </DialogContent>
            <DialogActions>
                <Button onClose={props.CloseAdd} color="primary">
                    Annuler
            </Button>
                <Button onClick={add} color="primary" autoFocus>
                    Valider
            </Button>
            </DialogActions>
        </Dialog>
    )
}


