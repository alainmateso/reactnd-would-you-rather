import React, { Component } from "react";
import { connect } from "react-redux";
import LoadingBar from "react-redux-loading";
import { handleInitialData } from "../actions/shared";

export class App extends Component {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(handleInitialData());
  }
  render() {
    return (
      <div>
        <LoadingBar />
        Would You Rather App
      </div>
    );
  }
}

function mapStateToProps({ users, questions }) {
  return {
    loading: users === {} && questions === {},
  };
}

export default connect(mapStateToProps)(App);
