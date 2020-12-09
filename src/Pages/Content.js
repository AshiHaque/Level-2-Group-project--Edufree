import React from 'react'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'

class Content extends React.Component{
    render(){
    return (
         
  <div className="mb-2">
    <Button variant="primary" size="lg">
      Large button
    </Button>{' '}
    <Button variant="secondary" size="lg">
      Large button
    </Button>
    <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src="holder.js/100px180" />
  <Card.Body>
    <Card.Title>Card Title</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <Button variant="primary">Go somewhere</Button>
  </Card.Body>
</Card>
   
  </div>
     
    )
}
}
export default Content;


