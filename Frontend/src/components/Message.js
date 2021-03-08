import React, { Component } from "react";
import { Button, Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import Cookies from "js-cookie";

class Message extends React.Component {
  constructor(state) {
    super(state);
    this.state = {
      contentMessage: [],
    };
  }

  componentDidMount() {
    axios
      .get("http://localhost:8080/getMessageTopic/" + Cookies.get("topic"))
      .then((response) => response.data)
      .then((data) => {
        this.setState({ contentMessage: data });
        console.log(data);
      });
  }

  onFileChange = (event) => {
    this.setState({
      file: event.target.files[0],
    });
  };

  render() {
    return this.state.contentMessage.map((data) => (
      <Card style={{ textAlign: "left", marginTop: 10 }}>
        <Card.Header>
          <h5>{data.sender}</h5>
        </Card.Header>
        <Card.Body>
          <Card.Text>
            <p>{data.message}</p>
          </Card.Text>
          <userLoggedIn />
        </Card.Body>
      </Card>
    ));
  }
}

export default Message;
