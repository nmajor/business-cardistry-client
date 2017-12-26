import React, { Component } from 'react';
import './CardSideActionForm.css';
import { SwatchesPicker } from 'react-color';
import {
  ButtonToolbar,
  ButtonGroup,
  Button,
  FormGroup,
  InputGroup,
  FormControl,
  ControlLabel,
} from 'react-bootstrap';

class CardSideActionForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showBgColorPicker: false,
      showTextColorPicker: false,
    }

    this.showTextColorPicker = this.showTextColorPicker.bind(this);
    this.showBgColorPicker = this.showBgColorPicker.bind(this);
    this.handleBgColorChange = this.handleBgColorChange.bind(this);
    this.handleTextColorChange = this.handleTextColorChange.bind(this);
  }
  showTextColorPicker() {
    this.setState({ showTextColorPicker: true });
  }
  showBgColorPicker() {
    this.setState({ showBgColorPicker: true });
  }
  handleBgColorChange(color) {
    this.props.onChange('bgColor', color.hex);
    this.setState({
      showTextColorPicker: false,
      showBgColorPicker: false,
    });
  }
  handleTextColorChange(color) {
    this.props.onChange('textColor', color.hex);
    this.setState({
      showTextColorPicker: false,
      showBgColorPicker: false,
    });
  }
  renderFormBody() {
    const {
      textColor,
      bgColor,
    } = this.props.formData;

    if (this.state.showBgColorPicker) {
      return (<div>
        <SwatchesPicker height={150} onChange={this.handleBgColorChange} />
      </div>);
    } else if (this.state.showTextColorPicker) {
      return (<div>
        <SwatchesPicker height={150} onChange={this.handleTextColorChange} />
      </div>);
    }

    return (
      <div>
        <FormGroup>
          <ControlLabel>Background Color</ControlLabel>
          <InputGroup>
            <FormControl type="text" value={bgColor} />
            <InputGroup.Button>
              <Button onClick={this.showBgColorPicker}>
                <span
                  className="color-box"
                  style={{ backgroundColor: bgColor }}
                />
              </Button>
            </InputGroup.Button>
          </InputGroup>
        </FormGroup>
        <FormGroup>
          <ControlLabel>Text Color</ControlLabel>
          <InputGroup>
            <FormControl type="text" value={textColor} />
            <InputGroup.Button>
              <Button onClick={this.showTextColorPicker}>
                <span
                  className="color-box"
                  style={{ backgroundColor: textColor }}
                />
              </Button>
            </InputGroup.Button>
          </InputGroup>
        </FormGroup>
      </div>
    );
  }
  render() {
    return (
      <form className="CardSideActionForm">
        {this.renderFormBody()}
        <hr />
        <div>
          <Button bsStyle="success" block><i className="fa fa-download" aria-hidden="true"></i> Front PDF</Button>
        </div>
      </form>
    );
  }
}

export default CardSideActionForm;
