import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import clipboard from "../images/clipboard.png";
import { Link } from "react-router-dom";
import { Container, Row, Col, Nav, Button, Card } from "react-bootstrap";
import DownloadCard from "../components/DownloadCard";
import Topic from "../components/Topic";

class ContentJava extends React.Component {
  render() {
    return (
      <div className="buttons">
        <Container className="buttonContainer" fluid>
          <Row className="ContentCardRow">
            <Topic></Topic>

            <Col lg={3}>
              <Button id="Resources" variant="primary" size="lg" block active>
                Resources
              </Button>
            </Col>
            <Col lg={3}>
              <Button id="Classes" variant="secondary" size="lg" block active>
                Classes
              </Button>
            </Col>
          </Row>
        </Container>

        <Container className="ContentContainer">
          <Row>
            <Col lg={12}>
              <DownloadCard />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default ContentJava;
