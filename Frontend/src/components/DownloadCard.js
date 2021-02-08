import React, { Component } from "react";
import clipboard from "../images/clipboard.png";
import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

class DownloadCard extends React.Component {
  state = {
    file: "",
    error: "",
    msg: "",
    fileName: "",
  };

  handleChangeFileName = (event) => {
    this.setState({ fileName: event.target.value });
  };

  downloadFile = () => {
    fetch("http://localhost:8080/downloadFile/" + this.props.fileName).then(
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

  onFileChange = (event) => {
    this.setState({
      file: event.target.files[0],
    });
  };
  render() {
    console.log(this.props);
    return (
      <Card style={{ textAlign: "left", marginTop: 10 }}>
        <Card.Header>
          <h6>{this.props.Title}</h6>
        </Card.Header>
        <Card.Body>
          <Card.Title>
            {" "}
            <h5>{this.props.Subject}</h5>
          </Card.Title>
          <Card.Text>
            <p>{this.props.Info}</p>
          </Card.Text>
          <Button onClick={this.downloadFile} variant="primary">
            Download
          </Button>
        </Card.Body>
      </Card>
    );
  }
}

export default DownloadCard;
