import React from "react";
import ReactDOM from "react-dom";
import { Container, Row, Col, Nav, Button, Card } from "react-bootstrap";
import InputGroup from "react-bootstrap/InputGroup";
import ContentCard from "../components/ContentCard";
import FavouriteCard from "../components/FavouriteCard";

class Dashboard extends React.Component {
  render() {
    return (
      <div>
        <Container className="ContentContainer">
          <Col>
            <p id="howDoesItWork">
              <em>Favourites</em>
            </p>
          </Col>

          <div class="ScrollBox">
            <FavouriteCard />
          </div>

          <Col>
            <p id="howDoesItWork">
              <em>You might like</em>
            </p>
          </Col>

          <Row>
            <Col lg={4}>
              <div class="m-2">
                <ContentCard />
              </div>
            </Col>

            <Col lg={4}>
              <div class="m-2">
                <ContentCard />
              </div>
            </Col>

            <Col lg={4}>
              <div class="m-2">
                <ContentCard />
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
export default Dashboard;
