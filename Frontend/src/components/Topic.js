import React, { Component } from "react";
import { Button, Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import { Col, Nav } from "react-bootstrap";
import Cookies from "js-cookie";

class Topic extends React.Component {
  handleClick(e) {
    Cookies.set("topic", e);
    console.log(Cookies.get("topic"));
    window.location.reload(false);
  }

  handleChangeFileName = (event) => {
    this.setState({ fileName: event.target.value });
  };

  constructor(state) {
    super(state);
    this.state = {
      topicName: [],
    };
  }

  componentDidMount() {
    axios
      .get("http://localhost:8080/gettopics")
      .then((response) => response.data)
      .then((data) => {
        this.setState({ topicName: data });
        console.log(data.name);
      });
  }

  render() {
    let a = this.state.topicName.map((data) => (
      <Nav.Link onClick={this.handleClick.bind(this, data.name)}>
        <h6>{data.name}</h6>
      </Nav.Link>
    ));
    return (
      <Col className="navCol" lg={3}>
        <Nav defaultActiveKey="/home" className="flex-column">
          {a}
        </Nav>
      </Col>
    );
  }
}

export default Topic;
