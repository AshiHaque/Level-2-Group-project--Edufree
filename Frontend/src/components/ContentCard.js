import React, { Component } from "react";
import clipboard from "../images/clipboard.png";
import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

class ContentCard extends React.Component {
  render() {
    return (
      <div class="m-4">
        <Card style={{ width: "18rem", borderRadius: 50 }}>
          <Card.Img variant="top" src={clipboard} />
          <Card.Body>
            <Card.Title>
              {" "}
              <h3>{this.props.title}</h3>
              <p
                style={{
                  background: "lightskyblue",
                  borderRadius: 50,
                  fontSize: 15,
                }}
              ></p>
            </Card.Title>
            <Card.Text>
              <p>{this.props.info}</p>
            </Card.Text>
            <Button
              style={{
                background: "lightskyblue",
                borderRadius: 10,
                height: 40,
                paddingBottom: 50,
                marginBottom: 20,
              }}
            >
              <Link to={this.props.Link} class="nav-link">
                LEARN
              </Link>
            </Button>
            <Card
              class="shadow-lg p-4 mb-4 bg-white"
              style={{ width: "15rem", textAlign: "left" }}
            >
              @Team EduFree
            </Card>
          </Card.Body>
        </Card>
      </div>
    );
  }
}

export default ContentCard;
