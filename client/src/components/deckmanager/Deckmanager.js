import React from 'react';
import './deckmanager.css';
import Cardpanel from './Cardpanel';
import { DragDropContext } from 'react-beautiful-dnd';

const Deckmanager = () => {
  return (
    <div>
      <DragDropContext>
        <Cardpanel position="left" />
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
        <Cardpanel position="right" />
      </DragDropContext>
    </div>
  );
};

export default Deckmanager;
