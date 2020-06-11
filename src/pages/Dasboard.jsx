import React, { Component, Fragment } from "react";
import { Switch, Route } from "react-router-dom";
import { connect } from "react-redux";
import Home from "./Home";
import Header from '../components/Header'

export class Dasboard extends Component {
  render() {
    return (
      <Fragment>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
        </Switch>
      </Fragment>
    );
  }
}

export default connect()(Dasboard);
