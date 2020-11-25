import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Navbar, NavDropdown, Nav, Form, FormControl, Button} from 'react-bootstrap';



function index() {
  return (
    <div className="Index">
      

  


<Navbar bg="primary" variant = "dark" expand="lg">
  <div className="justify-content-center">
  <Navbar.Brand href="#home">EduFree</Navbar.Brand>

  </div>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="#home">Forum</Nav.Link>
      <Nav.Link href="#link">Sign In</Nav.Link>
      <NavDropdown title="Courses" id="basic-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
      </NavDropdown>
    </Nav>
    <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-success">Search</Button>
    </Form>
  </Navbar.Collapse>
</Navbar>

</div>
);
}

export default index;
