import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import './App.css'; // will override default styles from semantic css (since it's after)

import Login from './pages/Login';
import Home from './pages/Home';
import Register from './pages/Register';

const App = () => (
  <Router>
      <Route exact path="/" component={Login} />
      <Route exact path="/home" component={Home} />
      <Route exact path="/register" component={Register} />
  </Router>
);

export default App;
