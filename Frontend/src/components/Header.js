import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import logo from "../images/LogoFull.png";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import NavDropdown from "react-bootstrap/NavDropdown";
import Cookies from "js-cookie";
function NavLoggedIn() {
  function handleClick(e) {
    e.preventDefault();
    Cookies.remove("user");
    window.location.reload(false);
  }

  return (
    <div>
      <header>
        <Navbar bg="light" expand="lg">
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-sm-2">
              <NavDropdown title="Courses" id="basic-nav-dropdown">
                <NavDropdown.Item href="/ContentPage">
                  Computer Science
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Languages
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Photography
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.4">....</NavDropdown.Item>
              </NavDropdown>
            </Nav>

            <Form inline>
              <FormControl
                type="text"
                placeholder="Search"
                className="mr-auto"
              />
              <Button variant="outline-success">Search</Button>
            </Form>
          </Navbar.Collapse>

          <Nav className="navbar mx-auto">
            <Link to="/" class="navbar-brand logo">
              <img
                src={logo}
                width="215"
                height="75"
                alt=""
                loading="lazy"
              ></img>
            </Link>
          </Nav>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <Link to="/UploadFile" class="nav-link">
                <button type="button" class="btn btn-primary btn-lg">
                  Upload
                </button>
              </Link>

              <Nav.Link href="/Dashboard">Dashboard</Nav.Link>
              <Link to="/" class="nav-link" onClick={handleClick}>
                Log Out
              </Link>
              <Link to="/UserProfile" class="nav-link">
                Profile 
              </Link>
              
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </header>
    </div>
  );
}

function NavGuest() {
  return (
    <div>
      <header>
        <Navbar bg="light" expand="lg">
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-sm-2">
              <NavDropdown title="Courses" id="basic-nav-dropdown">
                <NavDropdown.Item href="/ContentPage">
                  Computer Science
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Languages
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Photography
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.4">....</NavDropdown.Item>
              </NavDropdown>
            </Nav>

            <Form inline>
              <FormControl
                type="text"
                placeholder="Search"
                className="mr-auto"
              />
              <Button variant="outline-success">Search</Button>
            </Form>
          </Navbar.Collapse>

          <Nav className="navbar mx-auto">
            <Link to="/" class="navbar-brand logo">
              <img
                src={logo}
                width="215"
                height="75"
                alt=""
                loading="lazy"
              ></img>
            </Link>
          </Nav>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <Link to="/Login" class="nav-link">
                Sign In
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </header>
    </div>
  );
}

class Header extends React.Component {
  render() {
    return Cookies.get("user") === null || Cookies.get("user") === undefined ? (
      <NavGuest />
    ) : (
      <NavLoggedIn />
    );
  }
}

export default Header;
