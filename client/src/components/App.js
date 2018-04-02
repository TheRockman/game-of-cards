import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from './header/Header';

import Playground from './Playground';

// const Header = () => <h2>Header</h2>;
const Landing = () => <h2>Landing</h2>;
const CreateDeck = () => <h2>CreateDeck</h2>;

let user = {isLoggedIn: false, userName: 'Rando McRando'};

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <div>
          <Header user={user}> </Header>
          <Route exact path="/" component={Landing} />
          <Route path="/playground" component={Playground} />
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
