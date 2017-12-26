import React, { Component } from 'react';
import './CardForm.css';
import {
  FormGroup,
  InputGroup,
  FormControl,
  ControlLabel,
} from 'react-bootstrap';

class CardForm extends Component {
  constructor(props) {
    super(props);

    this.handleTextChange = this.handleTextChange.bind(this);
    this.handleCheckboxChange = this.handleCheckboxChange.bind(this);
  }
  handleTextChange(evt) {
    const field = evt.target.name;
    const value = evt.target.value;
    this.props.onChange(field, value)
  }
  handleCheckboxChange(evt) {
    const field = evt.target.name;
    const value = evt.target.checked;
    this.props.onChange(field, value)
  }
  render() {
    const {
      firstName,
      lastName,

      phone,
      email,
      github,
      linkedin,

      phoneShow,
      emailShow,
      githubShow,
      linkedinShow,
    } = this.props.cardData;

    return (
      <div className="CardForm">
        <form>
          <FormGroup>
            <ControlLabel>First Name</ControlLabel>
            <FormControl
              className="form-control"
              type="text"
              placeholder="John"
              name="firstName"
              value={firstName}
              onChange={this.handleTextChange}
            />
          </FormGroup>

          <FormGroup>
            <ControlLabel>Last Name</ControlLabel>
            <FormControl
              type="text"
              placeholder="Doe"
              name="lastName"
              value={lastName}
              onChange={this.handleTextChange}
            />
          </FormGroup>

          <FormGroup>
            <ControlLabel>Phone</ControlLabel>
            <InputGroup>
              <InputGroup.Addon>
                <i className="fa fa-phone" aria-hidden="true"></i>
              </InputGroup.Addon>
              <FormControl
                type="text"
                placeholder="555-555-5555"
                name="phone"
                value={phone}
                onChange={this.handleTextChange}
              />
              <InputGroup.Addon>
                <input
                  type="checkbox"
                  aria-label="..."
                  name="phoneShow"
                  checked={phoneShow}
                  onChange={this.handleCheckboxChange}
                />
              </InputGroup.Addon>
            </InputGroup>
          </FormGroup>

          <FormGroup>
            <ControlLabel>Email</ControlLabel>
            <InputGroup>
              <InputGroup.Addon>
                <i className="fa fa-envelope" aria-hidden="true"></i>
              </InputGroup.Addon>
              <FormControl
                type="text"
                placeholder="nick@nmajor.com"
                name="email"
                value={email}
                onChange={this.handleTextChange}
              />
              <InputGroup.Addon>
                <input
                  type="checkbox"
                  value={true}
                  aria-label="..."
                  name="emailShow"
                  checked={emailShow}
                  onChange={this.handleCheckboxChange}
                />
              </InputGroup.Addon>
            </InputGroup>
          </FormGroup>

          <FormGroup>
            <ControlLabel>Github Username</ControlLabel>
            <InputGroup>
              <InputGroup.Addon>
                <i className="fa fa-github" aria-hidden="true"></i>
              </InputGroup.Addon>
              <FormControl
                type="text"
                placeholder="nmajor"
                name="github"
                value={github}
                onChange={this.handleTextChange}
              />
              <InputGroup.Addon>
                <input
                  type="checkbox"
                  value={true}
                  aria-label="..."
                  name="githubShow"
                  checked={githubShow}
                  onChange={this.handleCheckboxChange}
                />
              </InputGroup.Addon>
            </InputGroup>
          </FormGroup>

          <FormGroup>
            <ControlLabel>LinkedIn Path</ControlLabel>
            <InputGroup>
              <InputGroup.Addon>
                <i className="fa fa-linkedin" aria-hidden="true"></i>
              </InputGroup.Addon>
              <FormControl
                type="text"
                placeholder="/in/nmajor"
                name="linkedin"
                value={linkedin}
                onChange={this.handleTextChange}
              />
              <InputGroup.Addon>
                <input
                  type="checkbox"
                  value={true}
                  aria-label="..."
                  name="linkedinShow"
                  checked={linkedinShow}
                  onChange={this.handleCheckboxChange}
                />
              </InputGroup.Addon>
            </InputGroup>
          </FormGroup>
        </form>
      </div>
    );
  }
}

export default CardForm;
