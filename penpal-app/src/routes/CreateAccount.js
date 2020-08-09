import React, {useState} from 'react';
import firebase from "../components/firebase";

import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import {BrowserRouter as Router, Route, Redirect} from 'react-router-dom'
import Home from "./Home";
const useStyles = makeStyles((theme) => ({
    root: {
        height: '100vh',
    },
    image: {
        backgroundImage: 'url(https://image.freepik.com/free-vector/floating-cute-astronaut-with-moon-space_7130-1078.jpg)',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
    },

    logo: {
        margin: theme.spacing(5, 4),
    },
    paper: {
        margin: theme.spacing(8, 4),
        marginTop: theme.spacing(2),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(1),
    },
    submit: {
        backgroundColor: "#5B17AB",
        margin: theme.spacing(3, 0, 2),
    },
}));

export default function CreateAccount(props) {

    // const {history} = props;
    const classes = useStyles();
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    function onSubmit(e){
        e.preventDefault()//blocks the postback event of the page

    }

    async function onRegister(){

        try{
            //The register in the Firebase class is running with useState data.
            await firebase.register(email,password)

            //If there are no errors, they are redirected to the dashboard page.
            console.log("We authenticated bois");
            props.history.replace("/home");
            // this.push('/home');
            // return <Redirect to={"/home"} />
           //  <Link to="/home"></Link>;

            // history.replace('/home')
        }catch(err){
            //create an alert instantly error
            alert(err.message)
        }
    }
    return (
        <Grid container component="main" className={classes.root}>
            <CssBaseline />
            <Grid item xs={false} sm={4} md={7} className={classes.image} />
            <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
                <div className={classes.paper}>
                    < div className = {classes.logo}>
                        <img src= {require("../../src/images/logo-cc.png")} width="535" height= "200" />
                    </div>
                    {/*}
                    <Typography component="h1" variant="h5">
                        Sign Up
                    </Typography>
                    */}
                    <form className={classes.form} onSubmit={onSubmit} >
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            id="email"
                            label="Email Address"
                            name="email"
                            autoComplete="email"
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                            autoFocus
                        />
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            name="password"
                            label="Password"
                            type="password"
                            id="password"
                            autoComplete="current-password"
                            value={password}
                            onChange={e => setPassword(e.target.value)}
                        />
                        <Router>
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="primary"
                            className={classes.submit}
                            onClick={onRegister}
                        >
                            Sign Up
                        </Button>
                        </Router>
                    </form>
                </div>
            </Grid>
        </Grid>
    );
}