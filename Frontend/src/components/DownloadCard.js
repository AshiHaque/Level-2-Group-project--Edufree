import React, { Component } from "react";
import clipboard from "../images/clipboard.png";
import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

class DownloadCard extends React.Component {
  render() {
    return (

        <Card style={{textAlign: "left", marginTop: 0 }}>
  <Card.Header><h6>{this.props.Title}</h6></Card.Header>
  <Card.Body>
    <Card.Title> <h5>{this.props.Subject}</h5></Card.Title>
    <Card.Text>
      <p>{this.props.Info}</p>
    </Card.Text>
    <Button href={this.props.Download} variant="primary">Download</Button>
  </Card.Body>
</Card>

    );
  }
}

export default DownloadCard;