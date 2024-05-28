import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from './pages/HomePage';
import BarPage from './pages/BarPage';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/bars/:id" component={BarPage} />
      </Switch>
    </Router>
  );
};

export default App;
