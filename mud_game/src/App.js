import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import Loginpage from './components/loginpage'

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Router>
      <div className="App">
        <ul>
          <li>
            <Link to="/login">Login</Link>
          </li>
        </ul>
      </div>
      <switch>
        <Route exact path="/login" component={Loginpage}/>
      </switch>
      </Router>
      </header>
    </div>
  );
}

export default App;
