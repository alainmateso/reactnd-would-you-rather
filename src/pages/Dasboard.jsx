import React, { Component, Fragment } from "react";
import { Switch, Route } from "react-router-dom";
import { connect } from "react-redux";
import Home from "./Home";
import Header from "../components/Header";
import QuestionPage from "./QuestionPage";
import NewQuestion from './NewQuestion'

export class Dasboard extends Component {
  render() {
    return (
      <Fragment>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/questions/:id" component={QuestionPage} />
          <Route path="/add" component={NewQuestion} />
        </Switch>
      </Fragment>
    );
  }
}

export default connect()(Dasboard);
