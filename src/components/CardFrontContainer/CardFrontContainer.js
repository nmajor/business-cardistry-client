import React, { Component } from 'react';
import './CardFrontContainer.css';
import {
  Col,
} from 'react-bootstrap';
import CardDimensions from '../CardDimensions/CardDimensions';
import CardFront from '../CardFront/CardFront';
import CardSideActionForm from '../CardSideActionForm/CardSideActionForm';

class CardFrontContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      bgColor: '#ffffff',
      textColor: '#333333',
    };

    this.handleFormChange = this.handleFormChange.bind(this);
  }
  handleFormChange(field, value) {
    const newState = {};
    newState[field] = value;
    this.setState(newState);
  }
  render() {
    return (
      <div className="CardFrontContainer">
        <Col md={7} className="CardFrontContainer-preview">
          <CardDimensions>
            <CardFront />
          </CardDimensions>
        </Col>
        <Col md={5} className="CardFrontContainer-actions">
          <div className="content-box">
            <CardSideActionForm
              onChange={this.handleFormChange}
              formData={this.state}
            />
          </div>
        </Col>
      </div>
    );
  }
}

export default CardFrontContainer;
