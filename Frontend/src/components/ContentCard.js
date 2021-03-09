import React, { Component } from "react";
import clipboard from "../images/clipboard.png";
import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import Cookies from "js-cookie";

class ContentCard extends React.Component {
  handleClick(e) {
    Cookies.set("course", e);
    console.log(Cookies.get("course"));
  }

  handleChangeFileName = (event) => {
    this.setState({ fileName: event.target.value });
  };

  constructor(state) {
    super(state);
    this.state = {
      contentCard: [],
    };
  }

  componentDidMount() {
    axios
      .get("http://localhost:8080/getcourses")
      .then((response) => response.data)
      .then((data) => {
        this.setState({ contentCard: data });
      });
  }

  render() {
    return this.state.contentCard.map((data) => (
      <div class="m-4">
        <Card style={{ width: "18rem", borderRadius: 50 }}>
          <Card.Img variant="top" src={clipboard} />
          <Card.Body>
            <Card.Title>
              {" "}
              <h3>{data.title}</h3>
              <p
                style={{
                  background: "lightskyblue",
                  borderRadius: 50,
                  fontSize: 15,
                }}
              ></p>
            </Card.Title>
            <Card.Text>
              <p>{data.description}</p>
            </Card.Text>
            <Button
              style={{
                background: "lightskyblue",
                borderRadius: 10,
                height: 40,
                paddingBottom: 50,
                marginBottom: 20,
              }}
              onClick={this.handleClick.bind(this, data.title)}
              href="/ContentJava"
            >
              LEARN
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
    ));
  }
}

export default ContentCard;
