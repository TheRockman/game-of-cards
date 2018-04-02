import React, { Component } from "react";
import './list.css';

class List extends Component {
    render() {
    const direction = this.props.direction;

    return (
        <ul className={'directional-list' + ' ' +  direction}>
        {this.props.items.map(item => <li key={item.id}>{item.name}</li>)}
        </ul>
    );
    }
}

export default List;
