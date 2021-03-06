import React, { Component } from 'react';
var Popular = require('./Popular');
var ReactRouter = require('react-router-dom');
var Router = ReactRouter.BrowserRouter;
var Route = ReactRouter.Route;
var Nav = require('./Nav');
var Home = require('./Home');
var Battle = require('./Battle');

class App extends Component {
  render() {
    return (
      <Router>
        <div className="container">
          <Nav />
          <Route exact path="/" component={Home} />
          <Route path="/battle" component={Battle} />
          <Route path="/popular" component={Popular} />
        </div>
      </Router>
    );
  }
}

export default App;
