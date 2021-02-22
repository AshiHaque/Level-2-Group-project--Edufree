import React from "react";
import { Container } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import students from "../images/STUDENT-IMM.png";
import ecosystem from "../images/Ecosystem.PNG";
import stats from "../images/stats.PNG";

class Home extends React.Component {
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
                Made for Students, by Students
              </h1>
              <p id="maininfo">
                A platform where anyone can learn for free, with endless
                resources available to support every student.
              </p>
              <p id="howDoesItWork">
                <em>How does it work?</em>
              </p>

              <Button
                href="#learn"
                variant="primary"
                size="lg"
                id="learnbutton"
              >
                Learn
              </Button>

              <Button
                href="#teach"
                variant="primary"
                size="lg"
                id="teachbutton"
              >
                Teach
              </Button>
            </div>
          </div>
        </Container>

        <Container className="TeachContainer" fluid>
          <section id="learn"> </section>
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
                LEARN
              </h1>
              <p id="maininfo">
                Take full advantage of our learning resources which have been
                created by trusted educators and students here on our platform!
                <p id="maininfo">
                  Once you have mastered a subject, feel free to register as a
                  educator to teach others.
                </p>
              </p>
            </div>
          </div>
        </Container>

        <Container className="TeachContainer" fluid>
          <div class="row">
            <div class="col-6">
              <section id="teach">
                <img
                  src={stats}
                  width="1000"
                  height="500"
                  id="ecosystem"
                  alt="ecosystem picture"
                ></img>
              </section>
            </div>
            <div class="col-6">
              <h1 class="title" id="slogan">
                {" "}
                TEACH
              </h1>
              <p id="maininfo">
                Become a teacher on our platform, contribute to the resources
                students have access to. Help improve the platform by adding
                your quality resources.
                <p id="maininfo">
                  You are not limited to teaching! Feel free to get involved and
                  learn too.
                </p>
              </p>
            </div>
          </div>
        </Container>
      </div>
    );
  }
}

export default Home;
