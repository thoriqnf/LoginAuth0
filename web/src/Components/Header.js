import React, { Component } from "react";
import { Navbar, Nav, NavItem } from "react-bootstrap";

class App extends Component {
  render() {
    return (
      <Navbar>
        <Navbar.Header>
          <Navbar.Brand>ReactAuth App</Navbar.Brand>
        </Navbar.Header>
        <Nav>
          <NavItem href="#">Login</NavItem>
        </Nav>
      </Navbar>
    );
  }
}

export default App;
