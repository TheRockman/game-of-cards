import React from 'react';
import { compose, lifecycle } from 'recompose';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';

import * as actions from '../actions';
import Playground from './Playground';

const Header = () => <h2>Header</h2>;
const Landing = () => <h2>Landing</h2>;
const CreateDeck = () => <h2>CreateDeck</h2>;

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <div>
          <Route exact path="/" component={Landing} />
          <Route path="/playground" component={Playground} />
        </div>
      </BrowserRouter>
    </div>
  );
};

export default compose(
  connect(null, actions),
  lifecycle({
    componentDidMount() {
      this.props.fetchUser();
    },
  }),
)(App);
