import React from "react";
import img from "../images/photo.jpeg";
import Button from "react-bootstrap/Button";
import axios from "axios";
import Cookies from "js-cookie";
import "../css/Userprofile.css";
import { Link, Redirect } from "react-router-dom";

function handleClick(e) {
  e.preventDefault();
  Cookies.remove("user");
  window.location.reload(false);
}

class UserProfile extends React.Component {
  state = {
    redirect: null,
    username: "",
    password: "",
    email: "",
  };

  handleChangeUsername = (event) => {
    this.setState({ username: event.target.value });
  };

  handleChangePassword = (event) => {
    this.setState({ password: event.target.value });
  };

  handleChangeEmail = (event) => {
    this.setState({ email: event.target.value });
  };

  handleSubmitUsername = (event) => {
    event.preventDefault();

    const newUsername = this.state.username;
    const username = Cookies.get("user");
    const data = { newUsername, username };

    fetch("http://localhost:8080/ammendusername/", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        window.alert("Your username has been changed.");
        this.setState({ redirect: "/" });
        console.log("Username changed");
        console.log(data);
      })
      .catch((error) => console.error("Error:", error));
  };

  handleSubmitPassword = (event) => {
    event.preventDefault();

    const password = this.state.password;

    const userProfilePassword = {
      password,
    };

    fetch("http://localhost:8080/ammendpassword/", {
      method: "POST",
      body: JSON.stringify(userProfilePassword),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        window.alert("Your password has been changed.");
        this.setState({ redirect: "/" });
        console.log("Password changed");
      })
      .catch((error) => console.error("Error:", error));
  };

  handleSubmitEmail = (event) => {
    event.preventDefault();

    const email = this.state.email;

    const userProfileEmail = {
      email,
    };

    fetch("http://localhost:8080/ammendemail/", {
      method: "POST",
      body: JSON.stringify(userProfileEmail),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        window.alert("Your email has been changed.");
        this.setState({ redirect: "/" });
        console.log("Email");
      })
      .catch((error) => console.error("Error:", error));
  };

  handleChangeFileName = (event) => {
    this.setState({ fileName: event.target.value });
  };

  constructor(state) {
    super(state);
    this.state = {
      userName: [],
    };
  }

  componentDidMount() {
    axios
      .get("http://localhost:8080/register/" + Cookies.get("user"))
      .then((response) => response.data)
      .then((data) => {
        this.setState({ userName: data });
        console.log(data);
      });
  }

  render() {
    return (
      <div className="ProfileContainer">
        <div className="imagee">
          <div className="circle">
            <img className="profile-pic" src={img}></img>
          </div>
          <button className="ProfilePicButton">Upload Image</button>
        </div>
        <div className="UserProfileContainer">
          <form
            className="UserProfileForm"
            onSubmit={this.handleSubmitUsername}
          >
            <input
              type="text"
              id="username"
              className="form-control"
              placeholder="Username"
              onChange={this.handleChangeUsername}
            />
            <button className="btn  btn-primary btn-block" type="submit">
              Change username
            </button>
          </form>
          <form className="UserProfileForm" onSubmit={this.handleSubmitEmail}>
            <input
              type="text"
              id="email"
              className="form-control"
              placeholder="Email address"
              onChange={this.handleChangeEmail}
            />
            <button className="btn btn-lg btn-primary btn-block" type="submit">
              Change Email
            </button>
          </form>
          <form
            className="UserProfileForm"
            onSubmit={this.handleSubmitPassword}
          >
            <input
              type="password"
              id="inputPassword"
              className="form-control"
              placeholder="Password"
              onChange={this.handleChangePassword}
            />
            <button className="btn btn-lg btn-primary btn-block" type="submit">
              Change Password
            </button>
          </form>
          <Link to="/" class="nav-link" onClick={handleClick}>
            <button
              className="btn btn-lg btn-secondary btn-block"
              type="submit"
            >
              Log Out
            </button>
          </Link>
        </div>
      </div>
    );
  }
}

export default UserProfile;
