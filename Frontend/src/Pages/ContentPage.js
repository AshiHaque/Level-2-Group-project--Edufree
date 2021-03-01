import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import clipboard from "../images/clipboard.png";
import { Link } from "react-router-dom";
import { Container, Row, Col, Nav, Button, Card } from "react-bootstrap";
import ContentCard from "../components/ContentCard";

class Content extends React.Component {
  render() {
    return (
      <div className="cards">
        <Container className="ContentPageContainer">
          <Row className="ContentRow">
            <ContentCard Link="/ContentJava" />
          </Row>
        </Container>
      </div>
    );
  }
}
export default Content;
