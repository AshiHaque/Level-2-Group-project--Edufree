import React,{Component} from 'react';
import {Link} from "react-router-dom";
import logo from '../images/LogoFull.png';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import NavDropdown from 'react-bootstrap/NavDropdown';

class Header extends React.Component{
    render(){
        return(
            <div>
                <header>
                <Navbar bg="light" expand="lg">
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-sm-2">
                <Link to="/ContentJava" class="nav-link">Courses</Link>
    </Nav>

    <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-auto" />
      <Button variant="outline-success">Search</Button>
    </Form>
    </Navbar.Collapse>


    <Nav className="navbar mx-auto">
        <Link to="/" class="navbar-brand logo">
            <img src={logo} width="215" height="75" alt="" loading="lazy"></img>
        </Link>
    </Nav>

  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    
    <Nav className="ml-auto">
    <Nav.Link href="#home">Forum</Nav.Link>
    <Link to="/Registration" class="nav-link">Sign In</Link>
    
    </Nav>

  </Navbar.Collapse>
</Navbar>
                </header>
            </div>
        )
    }
}

export default Header;