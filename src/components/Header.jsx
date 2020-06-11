import React, { Component } from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import { setActiveUser } from "../actions/shared";

export class Header extends Component {
  handleLogout = () => {
    this.props.dispatch(setActiveUser(null));
  };

  render() {
    const { users, authedUser } = this.props;
    const user = users[authedUser];
    return (
      <div className="header">
        <div className="nav-links">
          <NavLink to="" className="nav-item">
            Home
          </NavLink>
          <NavLink to="" className="nav-item">
            New question
          </NavLink>
          <NavLink to="" className="nav-item">
            Leader Board
          </NavLink>
          <NavLink to="" className="nav-item">
            <span>
              Hello, {this.props.authedUser}
              <img
                src={user.avatarURL}
                alt={`Avatar of ${user.name}`}
                className="avatar"
              />
            </span>
          </NavLink>
          <NavLink to="" className="nav-item" onClick={this.handleLogout}>
            Logout
          </NavLink>
        </div>
      </div>
    );
  }
}

function mapStateToProps({ authedUser, users }) {
  return {
    authedUser,
    users,
  };
}

export default connect(mapStateToProps)(Header);