import React, { Component } from 'react';
import './App.css';
import Card from "./components/card/Card";
import List from "./components/list/List";
import Draglist from "./components/list/Draglist";


class App extends Component {
  render() {
  const demoItems = [{id:'1', name:'list item 1'}, {id:'2', name:'list item 2'},{id:'3', name:'list item 3'},{id:'4', name:'list item 4'},{id:'5', name:'list item 5'}];
    return (
      <div className="App">
        <Card
          name="Flame of burnification"
          description="Dont play with matches"
          image="http://sf.co.ua/14/05/wallpaper-238879.jpg"
          rules="Pyromania"
          cost="1"
          power="3"
          toughness="0">
        </Card>

        <b>horizontal list</b>
        <List direction="horizontal" items={demoItems}></List>
        <b>vertical list</b>
        <List direction="vertical" items={demoItems}></List>
        <Draglist items="{demoItems}"></Draglist>
        <Draglist items="{demoItems}"></Draglist>
      </div>
    );
  }
}

export default App;
