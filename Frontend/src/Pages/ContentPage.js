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
          <Container className="ContentContainer">
            <Row>
            <Col lg={4}>
                <ContentCard 
                title="Java"
                info="All you need to get started with coding in Java!
                From installation to writing your first methods." 
                Link = "/ContentJava"
                />
              </Col>
              <Col lg={4}>
              <ContentCard 
              title="CSS"
              info="All you need to get started with CSS!" 
              Link = "/ContentCSS"/>
              </Col>
              <Col lg={4}>
                <ContentCard 
                title="Python"
                info="All you need to get started with coding in Python!
                " 
                Link = "/ContentJava"/>
              </Col>
            </Row>

            <Row>
              <Col lg={4}>
                <ContentCard 
                title="Algorithms"
                info="Text Here" 
                Link = "/ContentJava"/>
              </Col>
              <Col lg={4}>
              <ContentCard />
              </Col>
              <Col lg={4}>
                <ContentCard />
              </Col>
            </Row>

            <Row>
            <Col lg={4}>
                <ContentCard />
              </Col>
              <Col lg={4}>
              <ContentCard />
              </Col>
              <Col lg={4}>
                <ContentCard />
              </Col>
            </Row>
          </Container>
        </div>
      
    );
  }
}
export default Content;
