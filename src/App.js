import React from 'react';
import logo from './logo.svg';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Home from './Components/Home';
import Nav from './Components/Nav';
import './App.scss';

/* TODO
  * get sass going
  * install and use fontawesome
*/

function App() {
  return (
    <div className="App">
      <Router>
        <div className="app-frame">
          <Nav />
          <div className="app-body">
          <Switch>
            <Route path='/' component={Home} />
          </Switch>
          </div>
        </div>
        
      </Router>
    </div>
  );
}

export default App;
