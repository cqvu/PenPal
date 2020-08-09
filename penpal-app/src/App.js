import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import SignIn from "./components/SignIn";
import CreateAccount from "./components/CreateAccount";
import Home from "./components/Home";
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
