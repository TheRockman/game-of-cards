import React from 'react';
import { DragDropContext } from 'react-beautiful-dnd';
import { connect } from 'react-redux';
import { compose } from 'recompose';

import './deckmanager.css';
import Cardpanel from './Cardpanel';

const Deckmanager = ({ cards }) => {
  console.log('cards', cards);

  return (
    <div>
      <DragDropContext>
        <Cardpanel cards={[]} position="left" />
        <div className="deck-manager-content">
          <form>
            <input
              className="deck-name-input"
              type="text"
              placeholder="Deck name"
              name="Deckname"
            />
            <h3>20 / 40</h3>
            <input className="btn" type="submit" value="Submit" />
          </form>
        </div>
        <Cardpanel cards={cards} position="right" />
      </DragDropContext>
    </div>
  );
};

function mapStateToProps({ cards }) {
  return {
    cards,
  };
}

export default compose(connect(mapStateToProps))(Deckmanager);
