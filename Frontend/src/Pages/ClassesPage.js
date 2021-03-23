import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import clipboard from "../images/clipboard.png";
import { Link } from "react-router-dom";
import { Container, Row, Col, Nav, Button, Card } from "react-bootstrap";
import Class from "../components/Class";
import Topic from "../components/Topic";

class ClassesPage extends React.Component {
  render() {
    return (
      <div className="buttons">
        <Container className="buttonContainer" fluid>
          <Row className="ContentCardRow">
            <Topic></Topic>

            <Col lg={3}>
              <Link to="/ContentJava">
                <Button
                  id="Resources"
                  variant="secondary"
                  size="lg"
                  block
                  active
                >
                  Resources
                </Button>
              </Link>
            </Col>
            <Col lg={3}>
              <Button id="Classes" variant="primary" size="lg" block active>
                Classes
              </Button>
            </Col>
          </Row>
        </Container>

        <Container className="ContentContainer">
          <Row>
            <Col lg={12}>
              <Class />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default ClassesPage;
