import React, { Component } from "react";

import {Col, Nav,} from "react-bootstrap";

import "bootstrap/dist/css/bootstrap.min.css";

class SideBar extends React.Component {
  render() {
    return (

        <Col className="navCol" lg={3}><Nav defaultActiveKey="/home" className="flex-column">
    <Nav.Link eventKey="disabled" disabled>
    {this.props.Landing}
    </Nav.Link>    
  <Nav.Link href="/Datatypes">{this.props.FirstLink}</Nav.Link>
  <Nav.Link eventKey="/ContentCSS">{this.props.SecondLink}</Nav.Link>
  <Nav.Link eventKey="link-2">{this.props.ThirdLink}</Nav.Link>
  

</Nav></Col>

    );
  }
}

export default SideBar;