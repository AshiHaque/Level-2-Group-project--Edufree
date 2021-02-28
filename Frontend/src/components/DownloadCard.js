import React, { Component } from "react";
import { Button, Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import NavDropdown from "react-bootstrap/NavDropdown";
import Cookies from "js-cookie";

class DownloadCard extends React.Component {
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

  downloadFile = (contentName) => {
    fetch("http://localhost:8080/downloadFile/" + contentName).then(
      (response) => {
        response.blob().then((blob) => {
          let url = window.URL.createObjectURL(blob);
          let a = document.createElement("a");
          a.href = url;
          a.download = this.state.fileName;
          a.click();
        });
      }
    );
  };

  constructor(state) {
    super(state);
    this.state = {
      downloadCard: [],
    };
  }

  componentDidMount() {
    axios
      .get("http://localhost:8080/getContent")
      .then((response) => response.data)
      .then((data) => {
        this.setState({ downloadCard: data.content });
      });
  }

  onFileChange = (event) => {
    this.setState({
      file: event.target.files[0],
    });
  };

  render() {
    return this.state.downloadCard.map((content) => (
      <Card style={{ textAlign: "left", marginTop: 10 }}>
        <Card.Header>
          <h6>{content.name}</h6>
        </Card.Header>
        <Card.Body>
          <Card.Title>
            {" "}
            <h5>{content.type}</h5>
          </Card.Title>
          <Card.Text>
            <p>{this.state.Info}</p>
          </Card.Text>
          <Button
            onClick={this.downloadFile.bind(this, content.name)}
            variant="primary"
          >
            Download
          </Button>
          <input
            onClick={this.handleClick.bind(this, content.name)}
            class="star"
            id="starContent"
            type="checkbox"
            title="bookmark page"
          ></input>
          <userLoggedIn />
        </Card.Body>
      </Card>
    ));
  }
}

export default DownloadCard;
