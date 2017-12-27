import React, { Component } from 'react';
import './Logo.css';
import { Navbar } from 'react-bootstrap';

class Logo extends Component {
  render() {
    return (
      <div className="Logo">
        Welcome to...
        <div className="Logo-outside-border">
          <div className="Logo-inside-border">
            Business Cardistry
          </div>
        </div>
        A quick and easy business card builder.
      </div>
    );
  }
}

export default Logo;
