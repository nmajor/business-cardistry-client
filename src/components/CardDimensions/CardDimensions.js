import React, { Component } from 'react';
import './CardDimensions.css';
import { Row, Col } from 'react-bootstrap';

class CardDimensions extends Component {
  render() {
    return (
      <div className="CardDimensions">
        {this.props.children}
      </div>
    );
  }
}

export default CardDimensions;
