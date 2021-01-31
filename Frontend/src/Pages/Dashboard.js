import React from 'react';
import ReactDOM from 'react-dom';
import { Container, Row, Col, Nav, Button, Card } from "react-bootstrap";
import InputGroup from 'react-bootstrap/InputGroup'


class Dashboard extends React.Component {

    render() {
        return(

          <div>
              <Container className="ContentContainer">
              <Col className="navCol" lg={3}>
                  <h3 className="Color">Favourites</h3>
                  </Col>
         <Row>
         <Col lg={4}>
         <div class="m-2">
       
         <Card border="primary" style={{ width: '24rem', borderRadius: '20px'}}>
            <Card.Body>
              <Card.Title style={{ color: 'royalblue' }}><u>Intro Java (Basics) </u></Card.Title>
              
              <Card.Text  style={{ color: 'grey' }}>
              Description of resource. Description of resource. Description of resource



              </Card.Text>
              
              <Card class="shadow-lg p-4 mb-4 bg-white"style={{ width: '15rem'}} >@ James</Card>
            
            </Card.Body>
          </Card>
          </div>
          </Col>


          <Col lg={4}>
          <div class="m-2">
          <Card border="primary" style={{ width: '24rem', borderRadius: '20px'}}>
            <Card.Body>
              <Card.Title style={{ color: 'royalblue' }}><u>Intro Java (Basics) </u></Card.Title>
              
              <Card.Text  style={{ color: 'grey' }}>
              Description of resource. Description of resource. Description of resource



              </Card.Text>
              
              <Card class="shadow-lg p-4 mb-4 bg-white"style={{ width: '15rem'}} >@</Card>
            
            </Card.Body>
          </Card>
          </div>
         
          </Col>
        
          

          <Col lg={4}>
          <div class="m-2">
          <Card border="primary" style={{ width: '24rem', borderRadius: '20px'}}>
            <Card.Body>
              <Card.Title style={{ color: 'royalblue' }}><u>Intro Java (Basics) </u></Card.Title>
              
              <Card.Text  style={{ color: 'grey' }}>
              Description of resource. Description of resource. Description of resource



              </Card.Text>
              
              <Card class="shadow-lg p-4 mb-4 bg-white"style={{ width: '15rem'}} >@</Card>
            
            </Card.Body>
          </Card>
          </div>
          </Col>

          </Row>

          <Col className="navCol" lg={3}>
                  <h3 className="Color">You might like</h3>
                  </Col>

          <Row>
          <Col lg={4}>
          <div class="m-2">
          <Card border="primary" style={{ width: '24rem', borderRadius: '20px'}}>
            <Card.Body>
              <Card.Title style={{ color: 'royalblue' }}><u>Intro Java (Basics) </u></Card.Title>
              
              <Card.Text  style={{ color: 'grey' }}>
              Description of resource. Description of resource. Description of resource



              </Card.Text>
              
              <Card class="shadow-lg p-4 mb-4 bg-white"style={{ width: '15rem'}} >@</Card>
            
            </Card.Body>
          </Card>
          </div>
          </Col>


          <Col lg={4}>
          <div class="m-2">
          <Card border="primary" style={{ width: '24rem', borderRadius: '20px'}}>
            <Card.Body>
              <Card.Title style={{ color: 'royalblue' }}><u>Intro Java (Basics) </u></Card.Title>
              
              <Card.Text  style={{ color: 'grey' }}>
              Description of resource. Description of resource. Description of resource



              </Card.Text>
              
              <Card class="shadow-lg p-4 mb-4 bg-white"style={{ width: '15rem'}} >@</Card>
            
            </Card.Body>
          </Card>
          </div>
          </Col>

          <Col lg={4}>
          <div class="m-2">
          <Card border="primary" style={{ width: '24rem', borderRadius: '20px'}}>
            <Card.Body>
              <Card.Title style={{ color: 'royalblue' }}><u>Intro Java (Basics) </u></Card.Title>
              
              <Card.Text  style={{ color: 'grey' }}>
              Description of resource. Description of resource. Description of resource



              </Card.Text>
              
              <Card class="shadow-lg p-4 mb-4 bg-white"style={{ width: '15rem'}} >@</Card>
            
            </Card.Body>
          </Card>
          </div>
          </Col>

          </Row>
          </Container>

          </div>

          




         
)
}
}
export default Dashboard;




