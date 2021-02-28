import React from "react";
import img from "../images/photo.jpeg";

import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Cookies from "js-cookie";

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
     const username = Cookies.get("user")
     const data = {newUsername, username}
    
  
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




  render() {
   
    
    return (
      
      <div className="container">
        <div className="row">
          <div className="small-12 medium-2 large-2 columns">
            <div className="circle">
              <img className="profile-pic" src={img}></img>
            </div>
            <div className="p-image">
              <button className="upload-button">Upload Image</button>

              {/* <input className="file-upload" type="file" accept="image/*"/> */}
            </div>
          </div>
        </div>

        <div className="myForm">
        <form
              className="form-signin"
              id="formSignIn"
              onSubmit={this.handleSubmitUsername}
            >
              <input
                type="text"
                id="username"
                className="form-control"
                placeholder="Username"
                onChange={this.handleChangeUsername}
              />
              <button
                className="btn btn-lg btn-primary btn-block"
                type="submit"
              >
               Change username
              </button>
              </form>
              <form
              className="form-signin"
              id="formSignIn"
              onSubmit={this.handleSubmitEmail}
            >
             <input
                type="text"
                id="email"
                className="form-control"
                placeholder="Email address"
                onChange={this.handleChangeEmail}
              />
              <button
                className="btn btn-lg btn-primary btn-block"
                type="submit"
              >
               Change Email
              </button>
              </form>
              <form
              className="form-signin"
              id="formSignIn"
              onSubmit={this.handleSubmitPassword}
            >
                  <input
                type="password"
                id="inputPassword"
                className="form-control"
                placeholder="Password"
                onChange={this.handleChangePassword}
              />
              <button
                className="btn btn-lg btn-primary btn-block"
                type="submit"
              >
               Change Password
              </button>
              </form>
         
        </div>
      </div>
    );
  }
}

export default UserProfile;
