import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { NavLink, Redirect } from "react-router-dom";
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import axios from 'axios';
import { useState } from 'react';
import './LoginUser.css';

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(40),
    marginBottom: theme.spacing(50),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function SignInUser() {
  const classes = useStyles();

  const [EmailRegisteredR, setEmailRegisteredR] = useState("");
  const [MdpRegisteredR, setMdpRegisteredR] = useState("");
  const [redirectionR, setRedirectionR] = useState(false);

function handleSubmitUser(e) {
  e.preventDefault();
  console.log(EmailRegisteredR)

  axios
    .post('http://graph-it.cesi.group/registers', {
      identifier: EmailRegisteredR,
      password: MdpRegisteredR,
    })
    .then(response => {
      // Handle success.
      console.log('Well done!');
      console.log('User profile', response.data.user);
      console.log('User token', response.data.jwt);
      setRedirectionR(true);



    })
    .catch(error => {
      // Handle error.
      console.log('An error occurred:', error);
    });

  }

  return (
    <Container component="main" maxWidth="s">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Accès à l'espace client
        </Typography>
        <form className={classes.form} noValidate onSubmit={handleSubmitUser}>
          <TextField

            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Nom d'utilisateur"
            name="email"
            autoComplete="email"
            autoFocus
            value={EmailRegisteredR}
            onChange={(args) => setEmailRegisteredR(args.currentTarget.value)}

          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Mot de passe"
            type="password"
            id="password"
            autoComplete="current-password"
            value={MdpRegisteredR}
            onChange={(args) => setMdpRegisteredR(args.currentTarget.value)}

          />
          <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submitUser}


              >se Connecter
          </Button>
          { redirectionR === true && <Redirect to="/EspaceClient" />}
        </form>
        </div>


    </Container>
  );
}
