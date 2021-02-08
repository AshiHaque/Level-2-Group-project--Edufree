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
              Link_1="Getting Started"
              Link_2="Java Basics"
              Link_3="Variables"
              Link_4="Operators"
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
                <h1>Data Types </h1>
                <DownloadCard
                  Title="Java - Data Types"
                  Subject="Primative Data Types"
                  Info="Learn data types such as int, byte, short"
                  Download="/UploadFile"
                />
                <DownloadCard
                  Title="Java - Data Types"
                  Subject="Non-Primative Data Types"
                  Info="Learn Java's non-primative data types such as arrays and strings!"
                  Download="/UploadFile"
                />
                <h1>Variables</h1>
                <DownloadCard
                  Title="Java - Variables"
                  Subject="Types of Variables"
                  Info="Learn how to make variables such as int, string and boolean"
                  Download="/UploadFile"
                />
                <DownloadCard
                  Title="Java - Variables"
                  Subject="Displaying Variables"
                  Info="Learn how to display variables"
                  Download="/UploadFile"
                />

                <DownloadCard
                  Title="Java - Variables"
                  Subject="Displaying Variables"
                  Info="Learn how to display variables"
                  Download="/UploadFile"
                />
                <h1>Operators</h1>
                <DownloadCard
                  Title="Java - Operators"
                  Subject="Arithmetic Operators"
                  Info="Learn how Arithmetic Operators work in Java."
                  Download="/UploadFile"
                />
                <DownloadCard
                  Title="Java - Operators"
                  Subject="Assignment operators"
                  Info="Learn assignment operators in Java"
                  Download="/UploadFile"
                />

                <DownloadCard
                  Title="Java - Operators"
                  Subject="Comparison Operators"
                  Info="Learn comparison operators in Java"
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
