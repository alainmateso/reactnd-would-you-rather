import React, { Component } from "react";
import { connect } from "react-redux";
import LoadingBar from "react-redux-loading";
import { setActiveUser } from "../actions/shared";

export class Login extends Component {
  state = {
    user: "",
  };

  handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    this.setState(() => ({
      [name]: value,
    }));
  };

  handleLogin = () => {
    const { dispatch } = this.props;
    dispatch(setActiveUser(this.state.user));
  };

  render() {
    const { userIds, users } = this.props;
    return (
      <div className="login-page">
        <LoadingBar />
        <div className="card">
          <div className="card-header">
            <h3>Welcome to the Would You Rather App!</h3>
            <span>Please sign in to continue</span>
          </div>
          <div className="card-body">
            <div className="login-form">
              <select name="user" onChange={this.handleChange}>
                <option selected disabled>
                  Select User
                </option>
                {userIds &&
                  userIds.map((userId) => (
                    <option key={users[userId].id} value={userId}>
                      {users[userId].name}
                    </option>
                  ))}
              </select>
              <button
                className="btn login-btn"
                onClick={this.handleLogin}
                disabled={!this.state.user}
              >
                Sign In
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps({ users }) {
  return {
    users,
    userIds: Object.keys(users),
  };
}

export default connect(mapStateToProps)(Login);
