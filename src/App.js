import "./App.scss";
import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import ShopHome from "./ShopHome";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Switch>
            <Route exact path="/" component={ShopHome} />
            {/*
          <Route exact path ="/home" component={ShopAbout} />
          <Route exact path ="/home" component={ShopContact} /> 
          */}
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
