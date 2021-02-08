import React, { Component } from "react";

import { Col, Nav } from "react-bootstrap";

import "bootstrap/dist/css/bootstrap.min.css";

class SideBar extends React.Component {
  render() {
    return (
      <Col className="navCol" lg={3}>
        <Nav defaultActiveKey="/home" className="flex-column">
          <Nav.Link href="/ContentJava">{this.props.Link_1}</Nav.Link>
          <Nav.Link href="/JavaBasics">{this.props.Link_2}</Nav.Link>
          <Nav.Link href="/JavaVariables">{this.props.Link_3}</Nav.Link>
          <Nav.Link href="/JavaOperators">{this.props.Link_4}</Nav.Link>
        </Nav>
      </Col>
    );
  }
}

export default SideBar;
