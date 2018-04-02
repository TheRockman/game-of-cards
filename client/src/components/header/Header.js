import React from 'react';
import { compose } from 'recompose';
import { connect } from 'react-redux';

import './header.css';

const handleAuth = auth => {
  switch (auth) {
    case null:
      return;
    case false:
      return <a href="/auth/google">Login with google</a>;
    default:
      return <a href="/api/logout">Logout {auth.name}</a>;
  }
};

const Header = ({ auth }) => (
  <div>
    <nav className="main-header">
      <div>Game of cards</div>
      <div />
      <div>{handleAuth(auth)}</div>
    </nav>
    <div className="header-spacer" />
  </div>
);

function mapStateToProps({ auth }) {
  return {
    auth,
  };
}

export default compose(connect(mapStateToProps))(Header);
