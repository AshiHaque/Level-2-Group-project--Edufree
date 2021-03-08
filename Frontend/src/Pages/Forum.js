import React from "react";
import ReactDOM from "react-dom";
import Cookies from "js-cookie";
import { Container, Row, Col, Nav, Button, Card } from "react-bootstrap";
import Message from "../components/Message";
import Subject from "../components/Subject";
import Topic from "../components/Topic";

function handleClick(e) {
  e.preventDefault();
  window.location.reload(false);
}

class Forum extends React.Component {
  state = {
    message: "",
  };

  handleChangeMessage = (event) => {
    this.setState({ message: event.target.value });
  };
  handleSubmit = (event) => {
    event.preventDefault();
    const sender = Cookies.get("user");
    const message = this.state.message;
    const topicName = Cookies.get("topic");

    const post = {
      sender,
      message,
      topicName,
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
        <Row>
          <div className="ForumTopics">
            <Topic />
          </div>
          <Container className="ContentContainer">
            <Col>
              <p id="howDoesItWork">
                <em>Forum</em>
              </p>
            </Col>

            <div class="ScrollBox">
              <Message />
            </div>

            <Col>
              <p id="howDoesItWork">
                <em>Type here:</em>
                <form className="ForumMessage" onSubmit={this.handleSubmit}>
                  <textarea
                    placeholder="What's your message?"
                    onChange={this.handleChangeMessage}
                  ></textarea>

                  <button
                    className="btn btn-lg btn-primary btn-block"
                    type="submit"
                  >
                    Send
                  </button>
                </form>
                <button onClick={handleClick}> Check for new post</button>
              </p>
            </Col>
          </Container>
        </Row>
      </div>
    );
  }
}
export default Forum;
