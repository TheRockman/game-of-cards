import React from 'react';
import { compose } from 'recompose';
import { connect } from 'react-redux';

import './landing.css';

const LandingPage = ({ auth }) => (
  <div className="landing-wrapper">
    <div className="landing-content">
      <h1>Game of cards</h1>
      {auth ?
        <div>
        <button class="btn">Create deck</button>
        <br/>
        <button class="btn">Play</button>
        </div> : <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>}
    </div>
  </div>
);

function mapStateToProps({ auth }) {
  return {
    auth,
  };
}

export default compose(connect(mapStateToProps))(LandingPage);
