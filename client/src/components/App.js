import React from 'react';
import { compose, lifecycle } from 'recompose';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';

import * as actions from '../actions';
import Playground from './Playground';
import Header from './header/Header';
import LandingPage from './landing/Landing';
import Deckmanager from './deckmanager/Deckmanager';

const Landing = () => <LandingPage />;
const CreateDeck = () => <Deckmanager />;

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <div>
          <Header />
          <Route exact path="/" component={Landing} />
          <Route path="/playground" component={Playground} />
          <Route path="/create-deck" component={CreateDeck} />
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
      this.props.fetchCards();
    },
  }),
)(App);
