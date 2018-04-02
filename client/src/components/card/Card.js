import React, { Component } from "react";
import CardStat from "./Cardstat";
import './card.css';

class Card extends Component {
  render () {
    const { name, description, image, rules, cost, power, toughness } = this.props;
    return (
      <div className="card">
        <img alt="card art" className="card-showcase" src={image}></img>
        <div className="card-content">
          <h2>{name}</h2>
          <b>{rules}</b>
          <br></br>
          <small><i>"{description}"</i></small>
        </div>
        <div className="card-overlay">
        <CardStat value={cost} type="cost"></CardStat>
        <CardStat value={power} type="power"></CardStat>
        <CardStat value={toughness} type="toughness"></CardStat>
        </div>
      </div>
    )
  }
}

export default Card;
