import React, { Component } from "react";
import { Button, Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import NavDropdown from "react-bootstrap/NavDropdown";
import Cookies from "js-cookie";
import ReactPlayer from "react-player";

class Class extends React.Component {
  state = {
    file: "",
    error: "",
    msg: "",
    fileName: "",
    url: "",
    username: "",
  };

  handleClick(contentName) {
    const username = Cookies.get("user");
    const cardid = contentName;
    const data = {
      username,
      cardid,
    };

    Cookies.get("user") === null || Cookies.get("user") === undefined
      ? window.alert("You need to log in in order to save an item!")
      : console.log(data);
    fetch("http://localhost:8080/favourites", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    });
  }

  handleChangeFileName = (event) => {
    this.setState({ fileName: event.target.value });
  };

  constructor(state) {
    super(state);
    this.state = {
      downloadCard: [],
    };
  }

  render() {
    return (
      <Card style={{ textAlign: "left", marginTop: 10 }}>
        <Card.Body>
          <Card.Title>
            {" "}
            <h5>Java Class 1</h5>
          </Card.Title>
          <Card.Text>
            <ReactPlayer url="https://www.youtube.com/watch?v=2dZiMBwX_5Q" />
          </Card.Text>

          <userLoggedIn />
        </Card.Body>
      </Card>
    );
  }
}

export default Class;
