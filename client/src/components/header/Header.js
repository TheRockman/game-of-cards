import React, { Component } from "react";
import './header.css';

class Header extends Component {
  render () {
    const user = this.props.user;
    const isLoggedIn = user.isLoggedIn;
    return (
      <div>
      <nav className="main-header">
      <div>Game of cards</div>
      <div></div>
      <div>
      {isLoggedIn ? (
        <div>
        signed in as {user.userName}
        </div>
      ) : (
        <a href="">Sign in</a>
      )}
      </div>
      </nav>
      <div className="header-spacer"></div>
      </div>
    )
  }
}

export default Header;
