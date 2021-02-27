import React, { Component } from "react";
import { Button, Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import NavDropdown from "react-bootstrap/NavDropdown";

class Subject extends React.Component {
  handleChangeFileName = (event) => {
    this.setState({ fileName: event.target.value });
  };

  constructor(state) {
    super(state);
    this.state = {
      subjectName: [],
    };
  }

  componentDidMount() {
    axios
      .get("http://localhost:8080/getSubject")
      .then((response) => response.data)
      .then((data) => {
        this.setState({ subjectName: data });
      });
  }

  onFileChange = (event) => {
    this.setState({
      file: event.target.files[0],
    });
  };

  render() {
    return this.state.subjectName.map((data) => (
      <NavDropdown title="Subject" id="basic-nav-dropdown">
        <NavDropdown.Item>
          <h6>{data.name}</h6>
        </NavDropdown.Item>
      </NavDropdown>
    ));
  }
}

export default Subject;
