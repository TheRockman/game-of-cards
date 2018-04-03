import React, { Component } from "react";
import './deckmanager.css';
import Cardpanel from './Cardpanel';
import { DragDropContext } from 'react-beautiful-dnd';

class Deckmanager extends Component {
  render () {
    // const { value, type } = this.props;
    return (
      <div>
      <DragDropContext>
      <Cardpanel position="left"></Cardpanel>
      <div className="deck-manager-content">
      <form>
      <input className="deck-name-input" type="text" placeholder="Deck name" name="Deckname" />
      <h3>20 / 40</h3> 
      <input className="btn" type="submit" value="Submit" />
      </form>
      </div>
      <Cardpanel position="right"></Cardpanel>
      </DragDropContext>
      </div>
    )
  }
}

export default Deckmanager;
