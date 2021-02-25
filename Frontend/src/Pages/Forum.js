import React from "react";
import ReactDOM from "react-dom";
import { Container, Row, Col, Nav, Button, Card } from "react-bootstrap";
import Message from "../components/Message";

class Forum extends React.Component {
  state = {
    sender: "",
    message: "",
  };
  handleChangeSender = (event) => {
    this.setState({ sender: event.target.value });
  };

  handleChangeMessage = (event) => {
    this.setState({ message: event.target.value });
  };
  handleSubmit = (event) => {
    event.preventDefault();
    const sender = this.state.sender;
    const message = this.state.message;

    const post = {
      sender,
      message,
    };

    fetch("http://localhost:8080/message/", {
      method: "POST",
      body: JSON.stringify(post),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        window.alert("Your message is posted!");
        console.log("Post sent");
        window.location.reload(false);
      })
      .catch((error) => console.error("Error:", error));
  };
  render() {
    return (
      <div>
        <Container className="ContentContainer">
          <Col className="navCol" lg={3}>
            <p id="howDoesItWork">
              <em>Forum</em>
            </p>
          </Col>

          <div class="ScrollBox">
            <Message />
          </div>

          <Col className="navCol" lg={3}>
            <p id="howDoesItWork">
              <em>Text here:</em>
            </p>
          </Col>

          <Row>
            <Col lg={12}>
              <div class="m-2">
                <form
                  className="form-signin"
                  id="formSignIn"
                  onSubmit={this.handleSubmit}
                >
                  <input
                    type="text"
                    id="sender"
                    className="form-control"
                    placeholder="Name"
                    onChange={this.handleChangeSender}
                  />
                  <input
                    type="text"
                    id="inputmessage"
                    className="form-control"
                    placeholder="Type your message here"
                    onChange={this.handleChangeMessage}
                  />
                  <button
                    className="btn btn-lg btn-primary btn-block"
                    type="submit"
                  >
                    Send
                  </button>
                </form>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
export default Forum;
