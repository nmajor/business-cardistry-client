import React, { Component } from 'react';
import './CardDimensions.css';

class CardDimensions extends Component {
  render() {
    return (
      <div className="CardDimensions">
        <div className="CardDimensions-text" style={{ color: this.props.color }}>
          {this.props.text}
        </div>
        <div className="CardDimensions-content">
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default CardDimensions;
