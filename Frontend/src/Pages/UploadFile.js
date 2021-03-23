import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col, Nav, Button, Card } from "react-bootstrap";
import ContentJava from "./ContentJava";
import DownloadCard from "../components/DownloadCard";

class Content extends React.Component {
  state = {
    file: "",
    error: "",
    msg: "",
    fileName: "",
    title: "",
    subject: "",
    description: "",
  };

  handleChangeTitle = (event) => {
    this.setState({ title: event.target.value });
  };

  handleChangeSubject = (event) => {
    this.setState({ subject: event.target.value });
  };

  handleChangeDescription = (event) => {
    this.setState({ description: event.target.value });
  };

  handleChangeDownload = (event) => {
    this.setState({ download: event.target.value });
  };

  uploadFile = (event) => {
    const title = this.state.title;
    const subject = this.state.subject;
    const description = this.state.description;

    event.preventDefault();
    this.setState({ error: "", msg: "" });

    if (!this.state.file) {
      this.setState({ error: "Please upload a file." });
      return;
    }

    let data = new FormData();
    data.append("file", this.state.file);
    data.append("name", this.state.file.name);

    const fileInfo = {
      title,
      subject,
      description,
    };

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

  onFileChange = (event) => {
    this.setState({
      file: event.target.files[0],
    });
  };

  render() {
    return (
      <div>
        <div className>
          <h3>Upload a file</h3>
          <h4 style={{ color: "red" }}>{this.state.error}</h4>
          <h4 style={{ color: "green" }}>{this.state.msg}</h4>
          <input
            type="text"
            id="title"
            className="form-control"
            placeholder="Title of the content"
            onChange={this.handleChangeTitle}
          />
          <input
            type="text"
            id="subject"
            className="form-control"
            placeholder="Subject of the content"
            onChange={this.handleChangeSubject}
          />
          <input
            type="text"
            id="description"
            className="form-control"
            placeholder="Description of the content"
            onChange={this.handleChangeDescription}
          />
          <input onChange={this.onFileChange} type="file"></input>
          <button onClick={this.uploadFile}>Upload</button>
          <button onClick={this.handleClick}>Refresh</button>
        </div>
      </div>
    );
  }
}
export default Content;
