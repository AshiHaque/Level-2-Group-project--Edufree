import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import {Container, Row, Col, Nav, Button, Card} from 'react-bootstrap'

class Content extends React.Component{
    render(){
    return (
      <div className="buttons">
<Container className="buttonContainer" fluid>
  <Row>
  <Col className="navCol" lg={3}><Nav defaultActiveKey="/home" className="flex-column">
  <Nav.Link href="/home">Java</Nav.Link>
  <Nav.Link eventKey="link-1">CSS</Nav.Link>
  <Nav.Link eventKey="link-2">HTML</Nav.Link>
  <Nav.Link eventKey="disabled" disabled>
    Disabled
  </Nav.Link>
</Nav></Col>
    <Col lg={4}><Button id="Resources" variant="primary" size="lg" block>
      Resources
    </Button></Col>
    <Col lg={4}><Button id= "Classes" variant="primary" size="lg" block>
      Classes
    </Button></Col>
  </Row>
  </Container>
<Container className="ContentContainer">
  <Row>

    <Col lg={4}><Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src="./images/clipboard.png" />
  <Card.Body>
    <Card.Title>Intro Java(Basics)</Card.Title>
    <Card.Text>
      All you need to get started with coding in Java!
      IDE's, Java JDKs and other useful tips to help you get started.
    </Card.Text>
    <Button variant="primary">Java(Basics)</Button>
  </Card.Body>
</Card></Col>

    <Col lg={4}><Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src="holder.js/100px180" />
  <Card.Body>
    <Card.Title>Data Types(Java)</Card.Title>
    <Card.Text>
      Get started with learning the fundamental Java data types.
    </Card.Text>
    <Button variant="primary">Go somewhere</Button>
  </Card.Body>
</Card></Col>
    <Col lg={4}><Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src="holder.js/100px180" />
  <Card.Body>
    <Card.Title>Arrays(Java)</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <Button variant="primary">Go somewhere</Button>
  </Card.Body>
</Card></Col>
  </Row>
  </Container>
  </div>
     
    )
}
}
export default Content;


