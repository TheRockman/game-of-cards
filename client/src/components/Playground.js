import React, { Component } from 'react';
import './Playground.css';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import Card from './card/Card';
import List from './list/List';
import Draglist from './list/Draglist';

class Playground extends Component {
  render() {
    const demoItems = [
      { id: '1', name: 'list item 1' },
      { id: '2', name: 'list item 2' },
      { id: '3', name: 'list item 3' },
      { id: '4', name: 'list item 4' },
      { id: '5', name: 'list item 5' },
    ];
    return (
      <div className="App">
        <DragDropContext>
          <Card
            name="Flame of burnification"
            description="Dont play with matches"
            image="http://sf.co.ua/14/05/wallpaper-238879.jpg"
            rules="Pyromania"
            cost="1"
            power="3"
            toughness="0"
          />
          <b>horizontal list</b>
          <List direction="horizontal" items={demoItems} />
          <b>vertical list</b>
          <List direction="vertical" items={demoItems} />
          <Draglist items="{demoItems}" />
        </DragDropContext>
      </div>
    );
  }
}

export default Playground;
