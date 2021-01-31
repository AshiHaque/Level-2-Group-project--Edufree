import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

class Card extends React.Component {
  render() {
    return (
      <div class="m-2">
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src={clipboard} />
          <Card.Body>
            <Card.Title>Intro Java(Basics)</Card.Title>
            <Card.Text>
              All you need to get started with coding in Java! IDE's, Java JDKs
              and other useful tips.
            </Card.Text>
            <Button variant="primary">
              {" "}
              <Link to="/ContentTest" class="nav-link">
                Java(Basics)
              </Link>
            </Button>
          </Card.Body>
        </Card>
      </div>
    );
  }
}

export default Card;
