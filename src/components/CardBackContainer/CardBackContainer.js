import React, { Component } from 'react';
import { renderToString } from 'react-dom/server'
import _ from 'lodash';
import './CardBackContainer.css';
import {
  Col,
} from 'react-bootstrap';
import CardDimensions from '../CardDimensions/CardDimensions';
import CardBack from '../CardBack/CardBack';
import CardSideActionForm from '../CardSideActionForm/CardSideActionForm';

class CardBackContainer extends Component {
  constructor(props) {
    super(props);

    this.handleFormChange = this.handleFormChange.bind(this);
    this.handleDownloadClick = this.handleDownloadClick.bind(this);
  }
  handleFormChange(field, value) {
    this.props.onChange(_.camelCase(`back-${field}`), value);
  }
  handleDownloadClick() {
    const { cardData } = this.props;
    const cardFront = <CardBack cardData={cardData} />;

    this.props.onDownload(renderToString(cardFront));
  }
  render() {
    const { cardData } = this.props;

    const formData = {
      bgColor: cardData.backBgColor,
      textColor: cardData.backTextColor,
    }

    return (
      <div style={{ backgroundColor: cardData.backTextColor }} className="CardBackContainer">
        <Col md={7} className="CardBackContainer-preview">
          <CardDimensions text="Back" color={cardData.backBgColor}>
            <CardBack
              cardData={cardData}
            />
          </CardDimensions>
        </Col>
        <Col md={5} className="CardBackContainer-actions">
          <div className="content-box">
            <CardSideActionForm
              onChange={this.handleFormChange}
              formData={formData}
              buttonText="Back PDF"
              onDownload={this.handleDownloadClick}
            />
          </div>
        </Col>
      </div>
    );
  }
}

export default CardBackContainer;
