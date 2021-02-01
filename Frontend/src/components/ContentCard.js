import React, { Component } from "react";
import clipboard from "../images/clipboard.png";
import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

class ContentCard extends React.Component {
  render() {
    return (
      <div class="m-4">
        <Card style={{ width: "18rem" ,borderRadius:50}}>
          <Card.Img variant="top" src={clipboard} />
          <Card.Body>
            <Card.Title>Intro Java(Basics) <p style={{background: "lightskyblue" ,borderRadius:50 ,fontSize:15}}>#Notes</p></Card.Title>
            <Card.Text>
              All you need to get started with coding in Java! IDE's, Java JDKs
              and other useful tips.
            </Card.Text>
            <Button id="downloadButton" style={{background: "lightskyblue" ,borderRadius:10 ,height:40 ,paddingBottom:50,marginBottom:20}}>
              <Link to="/ContentTest" class="nav-link" >
                Download
              </Link>
            </Button>
            <Card class="shadow-lg p-4 mb-4 bg-white"style={{ width: '15rem',textAlign:"Left"}} >@Team EduFree</Card>
            <input  class="star" id="starred"type="checkbox" title="bookmark page"></input>
          </Card.Body>
        </Card>
      </div>
    );
  }
}

export default ContentCard;
