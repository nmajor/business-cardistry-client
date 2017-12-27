import React, { Component } from 'react';
import './CardBuildContainer.css';
import { Grid, Col } from 'react-bootstrap';
import Logo from '../Logo/Logo';
import CardForm from '../CardForm/CardForm';
import CardFrontContainer from '../CardFrontContainer/CardFrontContainer';
import CardBackContainer from '../CardBackContainer/CardBackContainer';
import { wrapHtml } from '../../helpers';
import { submitHtml } from '../../actions';

class CardBuildContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      title: '',

      phone: '',
      email: '',
      github: '',
      linkedin: '',

      phoneShow: true,
      emailShow: true,
      githubShow: true,
      linkedinShow: true,

      frontBgColor: '#ffffff',
      frontTextColor: '#333333',

      backBgColor: '#ffffff',
      backTextColor: '#333333',
    };

    this.handleDataChange = this.handleDataChange.bind(this);
    this.processPdf = this.processPdf.bind(this);
  }
  processPdf(html) {
    submitHtml(wrapHtml(html), (res) => {
      window.location.href = res.fileUrl;
    });
  }
  handleDataChange(field, value) {
    const newState = {};
    newState[field] = value;
    this.setState(newState);
  }
  render() {
    return (
      <Grid className="CardBuildContainer hor-padless" fluid={true}>
        <Col className="CardBuildContainer-aside hor-padless height-100" md={4}>
          <Logo />
          <CardForm
            cardData={this.state}
            onChange={this.handleDataChange}
          />
        </Col>
        <Col className="hor-padless height-100" md={8}>
          <div className="CardBuildContainer-front">
            <CardFrontContainer
              cardData={this.state}
              onChange={this.handleDataChange}
              onDownload={this.processPdf}
            />
          </div>
          <div className="CardBuildContainer-back">
            <CardBackContainer
              cardData={this.state}
              onChange={this.handleDataChange}
              onDownload={this.processPdf}
            />
          </div>
        </Col>
      </Grid>
    );
  }
}

export default CardBuildContainer;
