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
    let a = this.state.subjectName.map((data) => (
      <NavDropdown.Item href="/ContentPage">
        {" "}
        <h6>{data.name}</h6>{" "}
      </NavDropdown.Item>
    ));
    return (
      <NavDropdown title="Subject" id="basic-nav-dropdown">
        {a}
      </NavDropdown>
    );
  }
}

export default Subject;
