import React from 'react';
import { map } from 'lodash';
import { compose } from 'recompose';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

import './deckmanager.css';

import Draglist from '../list/Draglist';
import Card from '../card/Card';

// a little function to help us with reordering the result
const reorder = (list, startIndex, endIndex) => {
  const result = Array.from(list);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);

  return result;
};

const grid = 8;

const getItemStyle = (isDragging, draggableStyle) => ({
  // some basic styles to make the items look a bit nicer
  userSelect: 'none',
  padding: grid * 2,
  margin: `0 0 ${grid}px 0`,

  // change background colour if dragging
  background: isDragging ? 'lightgreen' : 'grey',

  // styles we need to apply on draggables
  ...draggableStyle,
});

const getListStyle = isDraggingOver => ({
  background: isDraggingOver ? 'lightblue' : 'lightgrey',
  padding: grid,
  width: 250,
});

const Cardpanel = ({ cards, position }) => (
  <div className={'card-panel' + ' ' + position}>
    <Droppable droppableId="droppable">
      {(provided, snapshot) => (
        <div
          className="card-panel-content"
          ref={provided.innerRef}
          style={getListStyle(snapshot.isDraggingOver)}
        >
          {map(cards, (card, index) => (
            <Draggable key={card.id} draggableId={card.id} index={index}>
              {(provided, snapshot) => (
                <div>
                  <div
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    style={getItemStyle(
                      snapshot.isDragging,
                      provided.draggableProps.style,
                    )}
                  >
                    {card.name}
                  </div>
                  {provided.placeholder}
                </div>
              )}
            </Draggable>
          ))}
          {provided.placeholder}
        </div>
      )}
    </Droppable>
  </div>
);

export default compose()(Cardpanel);
