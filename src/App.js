import React, {Component} from 'react';
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
import Login from './components/login'
import Register from './components/register'
import Dashboard from './components/dashboard'

export default class App extends Component {

  render() {
    return (
      <Router>
      <Switch>
        <Route path="/" exact component={Login} />
        <Route path="/register" exact component={Register} />
        <Route path="/dashboard" exact component={Dashboard} />
        <Route>Page Not Found 404</Route>
      </Switch>
    </Router>
    )
  }
}