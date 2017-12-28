import React, { Component } from 'react';
import './CardForm.css';
import {
  FormGroup,
  InputGroup,
  FormControl,
  ControlLabel,
} from 'react-bootstrap';
import {
  phoneIcon,
  envelopeIcon,
  githubIcon,
  linkedinIcon,
} from '../../helpers';

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
      name,
      title,

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
        <div className="text-right">
          <div className="btn btn-xs btn-link" onClick={this.props.randomizeColors}>Randomize Colors</div>
        </div>
        <form>
          <FormGroup>
            <ControlLabel>Name</ControlLabel>
            <FormControl
              className="form-control"
              type="text"
              placeholder="Joseph Cool"
              name="name"
              value={name}
              onChange={this.handleTextChange}
            />
          </FormGroup>

          <FormGroup>
            <ControlLabel>Title</ControlLabel>
            <FormControl
              type="text"
              placeholder="Fighter Pilot"
              name="title"
              value={title}
              onChange={this.handleTextChange}
            />
          </FormGroup>

          <FormGroup>
            <ControlLabel>Phone</ControlLabel>
            <InputGroup>
              <InputGroup.Addon>
                {phoneIcon('#324376', 16)}
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
                {envelopeIcon('#324376', 16)}
              </InputGroup.Addon>
              <FormControl
                type="text"
                placeholder="joseph@cool.com"
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
                {githubIcon('#324376', 16)}
              </InputGroup.Addon>
              <FormControl
                type="text"
                placeholder="jcool1950"
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
                {linkedinIcon('#324376', 16)}
              </InputGroup.Addon>
              <FormControl
                type="text"
                placeholder="/in/joesephcool"
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
