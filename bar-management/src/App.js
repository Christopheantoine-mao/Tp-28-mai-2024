// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Bars from './components/Bars';
import Beers from './components/Beers';
import Orders from './components/Orders';
import Login from './components/Login';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/bars" component={Bars} />
          <Route path="/beers" component={Beers} />
          <Route path="/orders" component={Orders} />
          <Route path="/login" component={Login} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
