import React, { Component } from 'react';
import './Header.css';
import { Navbar } from 'react-bootstrap';

class Header extends Component {
  render() {
    return (
      <Navbar fluid={true} inverse={true} className="Header">
        <Navbar.Header>
          <Navbar.Brand>
            <a href="#">Business Cardistry</a>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Navbar.Text pullRight>
            Have a great day!
          </Navbar.Text>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default Header;
