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

  uploadFile = (event) => {
    event.preventDefault();
    this.setState({ error: "", msg: "" });

    if (!this.state.file) {
      this.setState({ error: "Please upload a file." });
      return;
    }

    if (this.state.file.size >= 2000000) {
      this.setState({ error: "File size exceeds limit of 2MB." });
      return;
    }

    let data = new FormData();
    data.append("file", this.state.file);
    data.append("name", this.state.file.name);

    fetch("http://localhost:8080/uploadFile", {
      method: "POST",
      body: data,
    })
      .then((response) => {
        this.setState({ error: "", msg: "Sucessfully uploaded file" });
      })
      .catch((err) => {
        console.error("Error:", err);
      });
  };

  handleChangeFileName = (event) => {
    this.setState({ fileName: event.target.value });
  };

  downloadRandomImage = () => {
    fetch("http://localhost:8080/downloadFile/" + this.state.fileName).then(
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
    return (
      <Card style={{ textAlign: "left", marginTop: 0 }}>
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
          <Button href={this.props.Download} variant="primary">
            Download
          </Button>
        </Card.Body>
      </Card>
    );
  }
}

export default DownloadCard;
