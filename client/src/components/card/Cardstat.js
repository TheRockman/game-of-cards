import React, { Component } from "react";
import './card.css';

class CardStat extends Component {
  render () {
    const { value, type } = this.props;
    return (
      <div className={'card-stat ' + type}>
        {value}
      </div>
    )
  }
}

export default CardStat;
