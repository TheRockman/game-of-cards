import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Card from "../card/Card";
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

// fake data generator
const getItems = count =>
Array.from({ length: count }, (v, k) => k).map(k => ({
  id: `item-${k}`,
  content: `item ${k}`,
}));

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

  // change background colour if dragging
  background: isDragging ? 'lightgreen' : 'transparent',
  height: '100%',
  // styles we need to apply on draggables
  ...draggableStyle,
});

const getListStyle = isDraggingOver => ({
  background: isDraggingOver ? 'lightblue' : 'lightgrey',
  display: 'flex',
  overflowX: 'auto',
  overflowY: 'hidden',
});

class Draglist extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: getItems(6),
    };
    this.onDragEnd = this.onDragEnd.bind(this);
  }

  onDragEnd(result) {
    // dropped outside the list
    if (!result.destination) {
      return;
    }

    const items = reorder(
      this.state.items,
      result.source.index,
      result.destination.index
    );

    this.setState({
      items,
    });
  }

  // Normally you would want to split things out into separate components.
  // But in this example everything is just done in one place for simplicity
  render() {
    return (
      <div>

      <Droppable droppableId="droppable-1">
      {(provided, snapshot) => (
        <div
        ref={provided.innerRef}
        style={{ backgroundColor: snapshot.isDraggingOver ? 'lightblue' : 'lightgrey', minHeight: '250px' }}
        {...provided.droppableProps}
        >
        {provided.placeholder}
        </div>
      )}
      </Droppable>

      <Droppable droppableId="droppable-2" direction="horizontal">
      {(provided, snapshot) => (
        <div
        ref={provided.innerRef}
        style={getListStyle(snapshot.isDraggingOver)}
        {...provided.droppableProps}
        >
        {this.state.items.map((item, index) => (
          <Draggable key={item.id} draggableId={item.id} index={index}>
          {(provided, snapshot) => (
            <div>
            <div
            ref={provided.innerRef}
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            style={getItemStyle(
              snapshot.isDragging,
              provided.draggableProps.style
            )}
            >

            <Card
            name="Flame of burnification"
            description="Dont play with matches"
            image="http://sf.co.ua/14/05/wallpaper-238879.jpg"
            rules="Pyromania"
            cost="1"
            power="3"
            toughness="0">
            </Card>

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
  }
}

export default Draglist;
