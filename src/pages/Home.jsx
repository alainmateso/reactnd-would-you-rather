import React, { Component } from "react";
import { connect } from "react-redux";
import { setActiveUser } from "../actions/shared";

export class Home extends Component {
  handleLogout = () => {
    this.props.dispatch(setActiveUser(null));
  };
  render() {
    return (
      <div>
        <button onClick={this.handleLogout}>Logout</button>
      </div>
    );
  }
}

export default connect()(Home);
