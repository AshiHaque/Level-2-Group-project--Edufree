import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import clipboard from "../images/clipboard.png";
import { Link } from "react-router-dom";
import { Container, Row, Col, Nav, Button, Card } from "react-bootstrap";
import DownloadCard from "../components/DownloadCard";
import SideBar from "../components/SideBar";

class ContentJava extends React.Component {
  render() {
    return (
      <div className="buttons">
        <Container className="buttonContainer" fluid>
          <Row>
            <SideBar
              Landing="Getting Started"
              FirstLink="Data Types"
              SecondLink="Variables"
              ThirdLink="Operators"
            />

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

        <div className="cards">
          <Container className="ContentContbainer">
            <Row>
              <Col lg={12}>
                <DownloadCard
                  Title={this.props.title}
                  Subject="Getting Started"
                  Info="Information such as IDE's and Java versions to help you get started!"
                  Download="/UploadFile"
                />
                <DownloadCard
                  Title="C++"
                  Subject="Getting Started"
                  Info="Information such as IDE's and Java versions to help you get started!"
                  Download="/UploadFile"
                />
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    );
  }
}
export default ContentJava;
