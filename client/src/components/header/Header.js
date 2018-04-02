import React from 'react';
import { compose } from 'recompose';
import { connect } from 'react-redux';

import './header.css';

const Header = ({ auth }) => (
  <div>
    <nav className="main-header">
      <div>Game of cards</div>
      <div />
      <div>
        {auth ? <div>signed in as {auth.name}</div> : <a href="">Sign in</a>}
      </div>
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
