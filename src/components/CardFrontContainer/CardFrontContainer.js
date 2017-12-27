import React, { Component } from 'react';
import _ from 'lodash';
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

    this.handleFormChange = this.handleFormChange.bind(this);
  }
  handleFormChange(field, value) {
    this.props.onChange(_.camelCase(`front-${field}`), value);
  }
  render() {
    const { cardData } = this.props;

    const formData = {
      bgColor: cardData.frontBgColor,
      textColor: cardData.frontTextColor,
    }

    return (
      <div className="CardFrontContainer">
        <Col md={7} className="CardFrontContainer-preview">
          <CardDimensions text="Front">
            <CardFront
              cardData={cardData}
            />
          </CardDimensions>
        </Col>
        <Col md={5} className="CardFrontContainer-actions">
          <div className="content-box">
            <CardSideActionForm
              onChange={this.handleFormChange}
              formData={formData}
              buttonText="Front PDF"
            />
          </div>
        </Col>
      </div>
    );
  }
}

export default CardFrontContainer;
