import React, { Component } from 'react';
import './CardBuildContainer.css';
import { Grid, Col } from 'react-bootstrap';
import Logo from '../Logo/Logo';
import CardForm from '../CardForm/CardForm';
import CardFrontContainer from '../CardFrontContainer/CardFrontContainer';
import CardBackContainer from '../CardBackContainer/CardBackContainer';
import { wrapHtml } from '../../helpers';
import { submitHtml } from '../../actions';
import { randomColor } from '../randomColor';

class CardBuildContainer extends Component {
  constructor(props) {
    super(props);

    const randColor1 = randomColor({ luminosity: 'light' });
    const randColor2 = randomColor({ luminosity: 'dark' });

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

      frontBgColor: randColor1,
      frontTextColor: randColor2,

      backBgColor: randColor2,
      backTextColor: randColor1,
    };

    this.handleDataChange = this.handleDataChange.bind(this);
    this.processPdf = this.processPdf.bind(this);
    this.randomizeColors = this.randomizeColors.bind(this);
  }
  randomizeColors() {
    const randColor1 = randomColor({ luminosity: 'light' });
    const randColor2 = randomColor({ luminosity: 'dark' });

    this.setState({
      frontBgColor: randColor1,
      frontTextColor: randColor2,

      backBgColor: randColor2,
      backTextColor: randColor1,
    });
  }
  processPdf(html) {
    submitHtml(wrapHtml(html), (res) => {
      const oldPath = window.location.href;
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
            randomizeColors={this.randomizeColors}
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
