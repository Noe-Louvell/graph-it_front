import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Drawer from '@material-ui/core/Drawer';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';
import Container from '@material-ui/core/Container';

import Link from '@material-ui/core/Link';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import NotificationsIcon from '@material-ui/icons/Notifications';
import { mainListItems, secondaryListItems } from '../Dashboard/listItems';
import GetClients from '../../components/GetClients/getClients'

import  { useState } from 'react';
import Table from 'react-bootstrap/Table'

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  toolbar: {
    paddingRight: 24, // keep right padding when drawer closed
  },
  toolbarIcon: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 8px',
    ...theme.mixins.toolbar,
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  menuButtonHidden: {
    display: 'none',
  },
  title: {
    flexGrow: 1,
  },
  drawerPaper: {
    position: 'relative',
    whiteSpace: 'nowrap',
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerPaperClose: {
    overflowX: 'hidden',
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    width: theme.spacing(7),
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9),
    },
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: '100vh',
    overflow: 'auto',
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  paper: {
    padding: theme.spacing(2),
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column',
  },
  fixedHeight: {
    height: 240,
  },
}));

export default function Dashboard() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(true);
  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };
  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);

  const [demandeDevis, setDemandeDevis] = useState(false);
    const [inp_Email, setInpEmail] = useState('')
    const [inp_NumTel, setInpNumTel] = useState('')
    const [inp_Nom, setInpNom] = useState('')
    const [inp_Prenom, setInpPrenom] = useState('')
    const [inp_Entreprise, setInpEntreprise] = useState('')
    const [inp_TypeProjet, setInpTypeProjet] = useState('')
    const [inp_Message, setInpMessage] = useState('')

    const [errorEmail, setErrorEmail] = useState('none')
    const [errorNumTel, setErrorNumTel] = useState('')
    const [errorNom, setErrorNom] = useState('none')
    const [errorPrenom, setErrorPrenom] = useState('none')
    const [errorMessage, setErrorMessage] = useState('none')
    const [errorEntreprise, setErrorEntreprise] = useState('none')

    const [displayError, setDisplayError] = useState('')

    function CheckSend() {

        console.log(errorEmail)
        if (errorEmail != '') {
            setDisplayError('veuillez renseigner une adresse email')
            setErrorEmail('veuillez renseigner une adresse email')
            return;
        } else {
            setDisplayError('')
        }

        if (errorNumTel != '') {
            setDisplayError(errorNumTel)
            return;
        } else {
            setDisplayError('')
        }

        if (inp_Nom == '') {
            setDisplayError('Veuillez renseigner votre nom')
            setErrorNom('Veuillez renseigner votre nom')
            return;
        }
        else {
            setDisplayError('')
            setErrorNom('')

        }

        if (inp_Prenom == '') {
            setDisplayError('Veuillez renseigner votre prenom')
            setErrorPrenom('Veuillez renseigner votre prenom')
            return;
        }
        else {
            setDisplayError('')
            setErrorPrenom('')
        }

        if (inp_Entreprise == '' & demandeDevis == true) {
            setDisplayError('Vous devez renseigner votre entreprise pour une demande de devis')
            setErrorEntreprise('Vous devez renseigner votre entreprise pour une demande de devis')
            return;
        }
        else {
            setDisplayError('')
            setErrorEntreprise('')
        }

        if (inp_Message == '') {
            setDisplayError('Veuillez renseigner votre message')
            setErrorMessage('Veuillez renseigner votre message')
            return;
        }
        else {
            setDisplayError('')
            setErrorMessage('')
        }

        console.log('tentative envoi')

        fetch("http://graph-it.cesi.group/clients", {
            method: "post",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify({
                NomSociete: inp_Entreprise,
                NomC: inp_Nom,
                PrenomC: inp_Prenom,
                TypeC: inp_TypeProjet,
                CommentaireC: inp_Message,
                MailC: inp_Email,
                NumeroC: inp_NumTel,
            })
        }).then((res) => console.log(res.json()))

    }

    function checkNom(args) {
        let str = args.currentTarget.value;
        console.log("checkNom", str)
        setInpNom(str);

    }

    function checkNomSociete(args) {
        let str = args.currentTarget.value;
        console.log("checkNomSociete", str)
        setInpEntreprise(str);

    }

    function checkPrenom(args) {
        let str = args.currentTarget.value;
        console.log("checkPrenom", str)
        setInpPrenom(str);

    }

    function checkTypeProjet(args) {
        let str = args.currentTarget.value;
        console.log("TypeProjet", str)
        setInpTypeProjet(str);

    }

    function checkMessage(args) {
        let str = args.currentTarget.value;
        console.log("checkMessage", str)
        setInpMessage(str);

    }

    function checkEmail(args) {
        let str = args.currentTarget.value;
        console.log("checkEmail", str)
        setInpEmail(str);
        var regex = /[^@ \t\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/;

        if (str == '') {
            setErrorEmail("Veuillez renseigner une adresse email")
        }
        else {
            if (regex.test(str)) {
                setErrorEmail('')
            }
            else {
                setErrorEmail("Veuillez entrer une adresse email valide")
            }
        }

    }

    function checkNumTel(args) {
        let str = args.currentTarget.value;
        setInpNumTel(str);
        var regex = /^(0|\+33)[1-9]([-. ]?[0-9]{2}){4}$/;


        if (regex.test(str) || str == '') {
            setErrorNumTel('')
        }
        else {
            setErrorNumTel("Veuillez entrer un numéro de téléphone valide")
        }
    }

    function DevisSwitch() {
        if (demandeDevis === false) {
            setDemandeDevis(true)
        }
        else {
            setDemandeDevis(false)
        }
    }

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={clsx(classes.appBar, open && classes.appBarShift)}>
        <Toolbar className={classes.toolbar}>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            className={clsx(classes.menuButton, open && classes.menuButtonHidden)}
          >
            <MenuIcon />
          </IconButton>
          <Typography component="h1" variant="h6" color="inherit" noWrap className={classes.title}>
            Clients
          </Typography>
          <IconButton color="inherit">
            <Badge badgeContent={4} color="secondary">
              <NotificationsIcon />
            </Badge>
          </IconButton>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        classes={{
          paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose),
        }}
        open={open}
      >
        <div className={classes.toolbarIcon}>
          <IconButton onClick={handleDrawerClose}>
            <ChevronLeftIcon />
          </IconButton>
        </div>
        <Divider />
        <List>{mainListItems}</List>
        <Divider />
        <List>{secondaryListItems}</List>
      </Drawer>
      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Container maxWidth="lg" className={classes.container}>
          <br /><br /><br />
          <GetClients />
        </Container>
        <Container maxWidth="lg" className={classes.container}>
          <br /><br /><br />
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>NomC</th>
                <th>PrenomC</th>
                <th>NomSociete</th>
                <th>MailC</th>
                <th>NumeroC</th>
                <th>Message</th>
                <th>Type de projet</th>
              </tr>
            </thead>
            <tbody>
            <tr>
              <td><input  className="formImput" type="text" placeholder="" onChange={checkNom} /></td>
              <td><input className="formImput" type="text" placeholder="" onChange={checkPrenom} /></td>
              <td><input className="formImput" type="text" placeholder="" onChange={checkNomSociete} /></td>
              <td><input className="formImput" type="text" placeholder="" onChange={checkEmail}/></td>
              <td><input className="formImput" type="text" placeholder="" onChange={checkNumTel}  /></td>
              <td><input className="formImput" type="text" placeholder="" onChange={checkMessage} /></td>
              <td><select className="formImput" type="text" placeholder="Type de Projet*" onChange={checkTypeProjet}>
                <option value="ApplicationMobile">Application Mobile</option>
                <option value="SiteWeb">Site Web</option>
            </select></td>
              
              </tr>
            
            
            
            
            

            </tbody>
          </Table>
          <button onClick={CheckSend}>Ajout</button>
            <div>{displayError}</div>
        </Container>


      </main>
    </div>
  );
}
