import React, { Component } from 'react';
import { renderToString } from 'react-dom/server'
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
    this.handleDownloadClick = this.handleDownloadClick.bind(this);
  }
  handleFormChange(field, value) {
    this.props.onChange(_.camelCase(`front-${field}`), value);
  }
  handleDownloadClick() {
    const { cardData } = this.props;
    const cardFront = <CardFront cardData={cardData} />;

    this.props.onDownload(renderToString(cardFront));
  }
  render() {
    const { cardData } = this.props;

    const formData = {
      bgColor: cardData.frontBgColor,
      textColor: cardData.frontTextColor,
    }

    return (
      <div  style={{ backgroundColor: cardData.frontTextColor }} className="CardFrontContainer">
        <Col md={7} className="CardFrontContainer-preview">
          <CardDimensions text="Front" color={cardData.frontBgColor}>
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
              onDownload={this.handleDownloadClick}
            />
          </div>
        </Col>
      </div>
    );
  }
}

export default CardFrontContainer;
