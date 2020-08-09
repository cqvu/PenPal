import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import SignIn from "./routes/SignIn";
import CreateAccount from "./routes/CreateAccount";
import Home from "./routes/Home";
import logo from './logo.svg';
import './App.css';


function App() {
    return (
        <Router>
            <Route exact path="/" component={SignIn}/>
            <Route path="/register" component={CreateAccount}/>
            <Route path="/home" component={Home}/>
        </Router>
    );
}

export default App;
