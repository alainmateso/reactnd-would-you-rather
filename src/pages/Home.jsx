import React, { Component } from "react";
import { connect } from "react-redux";
import {  } from "../actions/shared";

export class Home extends Component {
  render() {
    return (
      <div>
        Home
      </div>
    );
  }
}

export default connect()(Home);
