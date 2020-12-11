import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import clipboard from '../images/clipboard.png';
import {Container, Row, Col, Nav, Button, Card} from 'react-bootstrap'

class Content extends React.Component{
    render(){
    return (
      <div className="buttons">
<Container className="buttonContainer" fluid>
  <Row>
  <Col className="navCol" lg={3}><Nav defaultActiveKey="/home" className="flex-column">
  <Nav.Link href="/ContentJava">Java</Nav.Link>
  <Nav.Link href="/ContentCSS"> CSS</Nav.Link>
  <Nav.Link eventKey="link-2">HTML</Nav.Link>
  <Nav.Link eventKey="disabled" disabled>
    Disabled
  </Nav.Link>
</Nav></Col>
    <Col lg={3}><Button id="Resources" variant="primary" size="lg" block>
      Resources
    </Button></Col>
    <Col lg={3}><Button id= "Classes" variant="primary" size="lg" block>
      Classes
    </Button></Col>
  </Row>
  </Container>
<Container className="ContentContainer">
  <Row>

    <Col lg={4}><Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={clipboard} />
  <Card.Body>
    <Card.Title>Intro Java(Basics)</Card.Title>
    <Card.Text>
      All you need to get started with coding in Java!
      IDE's, Java JDKs and other useful tips.
    </Card.Text>
    <Button variant="primary">Java(Basics)</Button>
  </Card.Body>
</Card></Col>

    <Col lg={4}><Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={clipboard} />
  <Card.Body>
    <Card.Title>Data Types(Java)</Card.Title>
    <Card.Text>
      Get started with learning the fundamental Java data types.
      And learn their uses.
    </Card.Text>
    <Button variant="primary">Data Types(Java)</Button>
  </Card.Body>
</Card></Col>
    <Col lg={4}><Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={clipboard} />
  <Card.Body>
    <Card.Title>Arrays(Java)</Card.Title>
    <Card.Text>
      Dive into learning arrays in Java.
      Learn their uses and how to create them.
    </Card.Text>
    <Button variant="primary">Arrays(Java)</Button>
  </Card.Body>
</Card></Col>
  </Row>
  <Row>
  <Col lg={4}><Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={clipboard} />
  <Card.Body>
    <Card.Title>Intro Java(Basics)</Card.Title>
    <Card.Text>
      All you need to get started with coding in Java!
      IDE's, Java JDKs and other useful tips.
    </Card.Text>
    <Button variant="primary">Java(Basics)</Button>
  </Card.Body>
</Card></Col>
<Col lg={4}><Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={clipboard} />
  <Card.Body>
    <Card.Title>Intro Java(Basics)</Card.Title>
    <Card.Text>
      All you need to get started with coding in Java!
      IDE's, Java JDKs and other useful tips.
    </Card.Text>
    <Button variant="primary">Java(Basics)</Button>
  </Card.Body>
</Card></Col>
<Col lg={4}><Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={clipboard} />
  <Card.Body>
    <Card.Title>Intro Java(Basics)</Card.Title>
    <Card.Text>
      All you need to get started with coding in Java!
      IDE's, Java JDKs and other useful tips.
    </Card.Text>
    <Button variant="primary">Java(Basics)</Button>
  </Card.Body>
</Card></Col>
  </Row>
  <Row>
  <Col lg={4}><Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={clipboard} />
  <Card.Body>
    <Card.Title>Intro Java(Basics)</Card.Title>
    <Card.Text>
      All you need to get started with coding in Java!
      IDE's, Java JDKs and other useful tips.
    </Card.Text>
    <Button variant="primary">Java(Basics)</Button>
  </Card.Body>
</Card></Col>
<Col lg={4}><Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={clipboard} />
  <Card.Body>
    <Card.Title>Intro Java(Basics)</Card.Title>
    <Card.Text>
      All you need to get started with coding in Java!
      IDE's, Java JDKs and other useful tips.
    </Card.Text>
    <Button variant="primary">Java(Basics)</Button>
  </Card.Body>
</Card></Col>
<Col lg={4}><Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={clipboard} />
  <Card.Body>
    <Card.Title>Intro Java(Basics)</Card.Title>
    <Card.Text>
      All you need to get started with coding in Java!
      IDE's, Java JDKs and other useful tips.
    </Card.Text>
    <Button variant="primary">Java(Basics)</Button>
  </Card.Body>
</Card></Col>
  </Row>
  </Container>
  
  </div>
     
    )
}
}
export default Content;


