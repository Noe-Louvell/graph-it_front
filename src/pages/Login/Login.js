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

export default function SignIn() {
  const classes = useStyles();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [redirection, setRedirection] = useState(false);

	function handleSubmit(e) {
		e.preventDefault();
    console.log(email)


    axios
      .post('http://graph-it.cesi.group/auth/local', {
        identifier: email,
        password: password,
      })
      .then(response => {
        // Handle success.
        console.log('Well done!');
        console.log('User profile', response.data.user);
        console.log('User token', response.data.jwt);
        setRedirection(true);



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
          Accès à l'espace Administrateur
        </Typography>
        <form className={classes.form} noValidate onSubmit={handleSubmit}>
          <TextField

            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Adresse Email"
            name="email"
            autoComplete="email"
            autoFocus
            value={email}
            onChange={(args) => setEmail(args.currentTarget.value)}

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
            value={password}
            onChange={(args) => setPassword(args.currentTarget.value)}

          />
          <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}

              >se Connecter
          </Button>
          { redirection === true && <Redirect to="/Dashboard" />}
        </form>
      </div>

    </Container>
  );
}
