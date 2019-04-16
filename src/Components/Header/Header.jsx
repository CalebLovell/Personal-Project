import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { killUser } from "./../../ducks/userReducer";
import axios from "axios";
import "./Header.css";

class Header extends Component {
  logout = () => {
    axios
      .get('/auth/logout')
  };

  render() {
    return (
      <header className="header">
        <Link to="/">
          <div className="logo">
            <img src="https://via.placeholder.com/150" alt="site logo" />
            <h1>Site Title</h1>
          </div>
        </Link>
        <ul className="site-nav">
          <Link to="/profile">
            <li>Profile</li>
          </Link>
          <Link to="/add">
            <li>Add Song</li>
          </Link>
          <Link to="/login">
            <li>Login</li>
          </Link>
          <Link to="/signup">
            <li>Sign Up</li>
          </Link>
          <Link to="/" onClick={() => this.props.killUser()}>
            <li>Logout</li>
          </Link>
        </ul>
      </header>
    );
  }
}

const mapState = reduxState => reduxState;

export default connect(
  mapState,
  { killUser }
)(Header);
