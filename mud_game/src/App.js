import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import Loginpage from './components/loginpage';
import Register from './components/register';
import PrivateRoute from './components/privateroute';
import Game from './components/game';
import Header from './components/header';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Router>
      <Header/>
      <switch>
        <Route exact path="/login" component={Loginpage}/>
        <Route exact path="/register" component={Register}/>
        <PrivateRoute 
          path="/game" 
          component={Game}/>
      </switch>
      </Router>
      </header>
    </div>
  );
}

export default App;
