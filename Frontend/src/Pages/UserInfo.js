import React from "react";
import { Redirect } from "react-router-dom";

class UserInfo extends React.Component {
  state = {
    redirect: null,
    username: "",
    password: "",
    email: "",
    name: "",
    surname: "",
    dob: "",
    institution: "",
    roles: "ROLE_USER",
    active: "True",
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

  handleChangeName = (event) => {
    this.setState({ name: event.target.value });
  };

  handleChangeSurname = (event) => {
    this.setState({ surname: event.target.value });
  };

  handleChangeDob = (event) => {
    this.setState({ dob: event.target.value });
  };

  handleChangeInstitution = (event) => {
    this.setState({ institution: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    const userName = this.state.username;
    const password = this.state.password;
    const email = this.state.email;
    const name = this.state.name;
    const surname = this.state.surname;
    const dob = this.state.dob;
    const institution = this.state.institution;
    const roles = this.state.roles;
    const active = this.state.active;

    const userReg = {
      userName,
      password,
      email,
      name,
      surname,
      dob,
      institution,
      roles,
      active,
    };

    fetch("http://localhost:8080/register/", {
      method: "POST",
      body: JSON.stringify(userReg),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        window.alert("Your account is created!");
        this.setState({ redirect: "/" });
        console.log("User Registered");
      })
      .catch((error) => console.error("Error:", error));
  };

  render() {
    if (this.state.redirect) {
      return <Redirect to={this.state.redirect} />;
    }
    return (
      <div>
        <div className="row">
          <div className="col-6">
            <div id="message">
              <h1 id="welcomeMessage">Create your account now!</h1>
              <h2 id="joinMessage">
                Join our platform!
                <br /> place where students can
                <br />
                help each other.
                <br />
              </h2>
            </div>
          </div>
          <div className="col-6">
            <form
              className="form-signin"
              id="formSignIn"
              onSubmit={this.handleSubmit}
            >
              <input
                type="text"
                id="email"
                className="form-control"
                placeholder="Email address"
                onChange={this.handleChangeEmail}
              />
              <input
                type="password"
                id="inputPassword"
                className="form-control"
                placeholder="Password"
                onChange={this.handleChangePassword}
              />
              <input
                type="text"
                id="username"
                className="form-control"
                placeholder="Username"
                onChange={this.handleChangeUsername}
              />
              <input
                type="text"
                id="name"
                className="form-control"
                placeholder="Name"
                onChange={this.handleChangeName}
              />
              <input
                type="text"
                id="surname"
                className="form-control"
                placeholder="Surname"
                onChange={this.handleChangeSurname}
              />
              <input
                type="date"
                id="dob"
                className="form-control"
                placeholder="DD/MM/YYYY"
                onChange={this.handleChangeDob}
              />{" "}
              Where are you studying?
              <br />
              <input
                type="radio"
                id="highschool"
                name="radio"
                onChange={this.handleChangeInstitution}
              />
              HighSchool
              <input
                type="radio"
                id="university"
                name="radio"
                onChange={this.handleChangeInstitution}
              />
              University
              <input
                type="radio"
                id="na"
                name="radio"
                onChange={this.handleChangeInstitution}
              />
              N/A
              <button
                className="btn btn-lg btn-primary btn-block"
                type="submit"
              >
                Create your account!
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default UserInfo;
