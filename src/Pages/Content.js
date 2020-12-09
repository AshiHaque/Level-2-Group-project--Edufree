import React from 'react'
import Button from 'react-bootstrap/Button'
import Nav from 'react-bootstrap/Nav'

class Content extends React.Component{
    render(){
    return (
         
  <div className="mb-2">
    <Button variant="primary" size="lg">
      Resources
    </Button>{' '}
    <Button variant="primary" size="lg">
      Classes
    </Button>
    <Nav defaultActiveKey="/home" className="flex-column">
  <Nav.Link href="/home">Java</Nav.Link>
  <Nav.Link eventKey="link-1">Link</Nav.Link>
  <Nav.Link eventKey="link-2">Link</Nav.Link>
  <Nav.Link eventKey="disabled" disabled>
    Disabled
  </Nav.Link>
</Nav>
   
  </div>
     
    )
}
}
export default Content;


