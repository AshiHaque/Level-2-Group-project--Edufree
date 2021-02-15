import React, { Component } from "react";
import { Button, Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import Cookies from "js-cookie";

function handleClick(e) {
  e.preventDefault();
  Cookies.get("user") === null || Cookies.get("user") === undefined
    ? window.alert("You need to log in in order to save an item!")
    : window.alert("The item is saved in your Dashboard! :)");
}

class DownloadCard extends React.Component {
  state = {
    file: "",
    error: "",
    msg: "",
    fileName: "",
    url: "",
  };

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
      contentCard: [],
    };
  }

  componentDidMount() {
    axios
      .get("http://localhost:8080/getContent")
      .then((response) => response.data)
      .then((data) => {
        this.setState({ contentCard: data.content });
      });
  }

  onFileChange = (event) => {
    this.setState({
      file: event.target.files[0],
    });
  };

  render() {
    return this.state.contentCard.map((content) => (
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
            onClick={handleClick}
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
