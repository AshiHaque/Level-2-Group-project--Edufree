import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import clipboard from "../images/clipboard.png";
import { Link } from "react-router-dom";
import { Container, Row, Col, Nav, Button, Card } from "react-bootstrap";
import ContentCard from "../components/ContentCard";

class Content extends React.Component {
  render() {
    return (
      <div className="buttons">
        <Container className="buttonContainer" fluid>
          <Row>
            <Col className="navCol" lg={3}>
              <Nav defaultActiveKey="/home" className="flex-column">
                <Nav.Link href="/ContentJava">Java</Nav.Link>
                <Nav.Link href="/ContentCSS"> CSS</Nav.Link>
                <Nav.Link eventKey="link-2">HTML</Nav.Link>
                <Nav.Link eventKey="disabled" disabled>
                  Disabled
                </Nav.Link>
              </Nav>
            </Col>

            <Col lg={3}>
              <Button id="Resources" variant="primary" size="lg" block>
                Resources
              </Button>
            </Col>
            <Col lg={3}>
              <Button id="Classes" variant="primary" size="lg" block>
                Classes
              </Button>
            </Col>
          </Row>
        </Container>

        <div className="cards">
          <Container className="ContentContainer">
            <Row>
              <Col lg={4}>
                <ContentCard />
              </Col>
              <ContentCard />
              <Col lg={4}>
                <ContentCard />
              </Col>
            </Row>

            <Row>
              <Col lg={4}>
                <ContentCard />
              </Col>
              <ContentCard />
              <Col lg={4}>
                <ContentCard />
              </Col>
            </Row>

            <Row>
              <Col lg={4}>
                <ContentCard />
              </Col>
              <ContentCard />
              <Col lg={4}>
                <ContentCard />
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    );
  }
}
export default Content;
