import React, { useState, useEffect } from "react";
import { Link, Redirect } from "react-router-dom";
import { Autocomplete } from '@material-ui/lab';
import TextField from '@material-ui/core/TextField';
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
// const handleClick=()=> {
//   // Cookies.set("subject", e);
//   // console.log(Cookies.get("subject"));
//   console.log("hello");
// }


const Header = () => {
  const [subjects, setSubjects] = useState([]);
  const [searchString, setSearchString] = useState("");
  

  useEffect(() => {
    fetch("http://localhost:8080/getSubject", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        res.json().then((data) => {
          setSubjects(data)
        });
      })
      .catch((error) => console.error("Error:", error));
  }, []);

  const handleInput = ({ target: { value } }) => setSearchString(value);

  const handleSelection = (e, subject) => {
    if (!subject) {
      setSearchString('');
    }
    console.log("dadad")
  }
  return Cookies.get("user") === null ||
    Cookies.get("user") === undefined ||
    Cookies.get("user") === "undefined" ? (
    // <NavGuest />
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
              <Nav.Link href="/Aboutus">About</Nav.Link>
              <Nav.Link href="/Support">Help</Nav.Link>
              <Link to="/Login" class="nav-link">
                Sign In
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </header>
    </div>
  ) : (
    // <NavLoggedIn />
    <div>
      <header>
        <Navbar bg="light" expand="lg">
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-sm-2">
              <Subject />
            </Nav>

            <Form inline>
              <Autocomplete
                id="combo-box-demo"
                options={
                  searchString
                    ? subjects.filter((s) =>
                        s.name.toLowerCase().includes(searchString.toLowerCase())
                      )
                    : subjects

                }
                
                getOptionLabel={(option) => option.name}
                // onClick={this.handleClick.bind(this)}
                // href="/ContentPage"
                style={{ width: 300 }}
                onChange={handleSelection}
                renderInput={(params) => (
                  <TextField
                    type="text"
                    placeholder="Search"
                    className="mr-auto"
                    id="txt_search"
                    {...params}
                    onChange={handleInput}
                  />
                )}
              />
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
};

export default Header;