import React, { Component } from 'react';
import './CardBuildContainer.css';
import { Grid, Col } from 'react-bootstrap';
import CardForm from '../CardForm/CardForm';
import CardFrontContainer from '../CardFrontContainer/CardFrontContainer';
import CardBackContainer from '../CardBackContainer/CardBackContainer';

class CardBuildContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      firstName: '',
      lastName: '',

      phone: '',
      email: '',
      github: '',
      linkedin: '',

      phoneShow: true,
      emailShow: true,
      githubShow: true,
      linkedinShow: true,
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
      <Grid className="CardBuildContainer hor-padless" fluid={true}>
        <Col className="hor-padless height-100" md={4}>
          <CardForm
            cardData={this.state}
            onChange={this.handleFormChange}
          />
        </Col>
        <Col className="hor-padless height-100" md={8}>
          <div className="height-50">
            <CardFrontContainer
              cardData={this.state}
            />
          </div>
          <div className="height-50">
            <CardBackContainer
              cardData={this.state}
            />
          </div>
        </Col>
      </Grid>
    );
  }
}

export default CardBuildContainer;
