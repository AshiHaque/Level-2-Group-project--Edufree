import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import logo from "../images/LogoFull.png";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Forum from "../Pages/Forum";
import FormControl from "react-bootstrap/FormControl";
import NavDropdown from "react-bootstrap/NavDropdown";
import Subject from "./Subject";
import Cookies from "js-cookie";

function NavLoggedIn() {
  return (
    <div>
      <header>
        <Navbar bg="light" expand="lg">
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-sm-2">
              <Subject />
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
              <Link to="/Forum" class="nav-link">
                Forum
              </Link>
              <Nav.Link href="/Dashboard">Dashboard</Nav.Link>
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
              <Subject />
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
              <Nav.Link href="/Support">Help</Nav.Link>
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
    return Cookies.get("user") === null ||
      Cookies.get("user") === undefined ||
      Cookies.get("user") === "undefined" ? (
      <NavGuest />
    ) : (
      <NavLoggedIn />
    );
  }
}

export default Header;
