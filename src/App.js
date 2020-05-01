import React from 'react';
import logo from './logo.svg';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Home from './Components/Home';
import Nav from './Components/Nav';
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Nav>
          <Switch>
            <Route path='/' component={Home} />
          </Switch>
        </Nav>
      </Router>
      
    </div>
  );
}

export default App;
