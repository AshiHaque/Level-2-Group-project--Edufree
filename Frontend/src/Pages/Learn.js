import React from "react";
import { Container } from "react-bootstrap";
import ecosystem from "../images/Ecosystem.PNG";

class learn extends React.Component {
  render() {
    return (
      <div>
        <Container className="homeContainer" fluid>
          <div class="row">
            <div class="col-6">
              <img
                src={ecosystem}
                width="1000"
                height="500"
                id="ecosystem"
                alt="ecosystem picture"
              ></img>
            </div>
            <div class="col-6">
              <h1 class="title" id="slogan">
                {" "}
                Made for Students,by Students
              </h1>
              <p id="maininfo">
                Take full advantage of our learning resources which have been created by trusted
                educators and students here on our platform!
                
                <p id="maininfo">Once you have mastered a subject, feel free to register as a educator to teach others.</p>
              </p>
              <p id="howDoesItWork">
                <em>How does it work?</em>
              </p>
              </div>
          </div>
        </Container>
      </div>
    );
  }
}

export default learn;