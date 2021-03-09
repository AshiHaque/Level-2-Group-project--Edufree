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
    const userCheck=/^(?=[a-zA-Z0-9.]{8,20}$)(?!.*[.]{2})[^.].*[^.]$/;
    if (!userCheck.test(newUsername)){
      alert("Minimum 8 characters without . and _")
    }
    else {
      fetch("http://localhost:8080/ammendusername/", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
       // window.alert("Your username has been changed.");
        this.setState({ redirect: "/" });
        console.log("Username changed");
        console.log(data);
      })
      .catch((error) => console.error("Error:", error));
      alert("Changed username successfully")
    }

    
  };

  handleSubmitPassword = (event) => {
    event.preventDefault();

    const password = this.state.password;
    const passCheck=/^(?=.[a-z])(?=.[A-Z])(?=.\d)(?=.[@$!%?&])[A-Za-z\d@$!%?&]{8,10}$/;
    if (!passCheck.test(password)){
      alert("Minimum eight and maximum 10 characters, at least one uppercase letter, one lowercase letter, one number and one special character:")
    }
    else {
      
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
          //window.alert("Your password has been changed.");
          this.setState({ redirect: "/" });
          console.log("Password changed");
        })
        .catch((error) => console.error("Error:", error));
        alert("Password succesfully changed");
    }
    

  };

  handleSubmitEmail = (event) => {
    event.preventDefault();

    const email = this.state.email;
    var emailRGEX = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$/; 
      if(!emailRGEX.test(email)){
     alert("Enter valid email")
   }
   else{
     alert("successfully changed email")
   }
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
              required
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
