import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch, withRouter } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import Loginpage from './components/loginpage';
import Register from './components/register';
import PrivateRoute from './components/privateroute';
import Game from './components/game';
import Header from './components/header';
import Controls from './components/Controls.js';
import Mapc from './components/Map.js'


function App(props) {

  const handleLogout = () => {
    localStorage.removeItem('Token');
    window.location.reload()
  };
  return (
    <div className="App">
      <header className="App-header">
      <button onClick={handleLogout}>Logout</button>

      <Router>
      <Header/>
      <switch>
      <PrivateRoute exact path="/controls" component={Controls}/>
      <PrivateRoute exact path="/map" component={Mapc}/>



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
