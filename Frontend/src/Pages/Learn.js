import React from "react";
import { Container } from "react-bootstrap";
import students from "../images/STUDENT-IMM.png";

class learn extends React.Component {
  render() {
    console.log(this.props.userLoggedIn);
    return (
      <div>
        <Container className="homeContainer" fluid>
          <div class="row">
            <div class="col-6">
              <img
                src={students}
                width="2000"
                height="500"
                id="studentpic"
                alt="student picture"
              ></img>
            </div>
            <div class="col-6">
              <h1 class="title" id="slogan">
                {" "}
                Made for Students,by Students
              </h1>
              <p id="maininfo">
                A platform where anyone can learn for free, with endless
                resources available to support every student.
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