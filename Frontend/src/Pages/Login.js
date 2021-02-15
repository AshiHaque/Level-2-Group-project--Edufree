import React from "react";
import { Link, Redirect } from "react-router-dom";
import Home from "../Pages/Home";
import Cookies from "js-cookie";
import { GoogleLogin } from "react-google-login";
import FacebookLogin from "react-facebook-login";
import GitHubLogin from "react-github-login";

class Login extends React.Component {
  state = {
    redirect: null,
    username: "",
    password: "",
  };

  handleChangeUsername = (event) => {
    this.setState({ username: event.target.value });
  };

  handleChangePassword = (event) => {
    this.setState({ password: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    const username = this.state.username;
    const password = this.state.password;

    const user = {
      username,
      password,
    };

    const fetchPromise = fetch("http://localhost:8080/login", {
      method: "POST",
      body: JSON.stringify(user),
      headers: {
        "Content-Type": "application/json",
      },
    });
    fetchPromise
      .then((res) => {
        return res.json();
      })
      .then((jwt) => {
        console.log(jwt);
        Cookies.set("user", jwt);
        //window.$userLoggedIn = jwt;
        console.log(Cookies.get("user"));
      });

    fetch("http://localhost:8080/login", {
      method: "POST",
      body: JSON.stringify(user),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        if (res.ok) {
          // if HTTP-status is 200-299
          // get the response body (the method explained below)
          this.setState({ redirect: "/TestLoggedIn" });
          console.log("User Logged In");
        } else {
          console.log("Error");
        }
      })
      .catch((error) => console.error("Error:", error));
  };

  render() {
    const responseGoogle = (response) => {
      console.log(response);
    };

    const responseFacebook = (response) => {
      console.log(response);
    };

    const onSuccess = (response) => console.log(response);
    const onFailure = (response) => console.error(response);
    <Home userLoggedIn={"HI"} />;
    if (this.state.redirect) {
      return <Redirect to={this.state.redirect} />;
    }
    return (
      <div>
        <div className="row">
          <div className="col-6">
            <div id="message">
              <h1 id="welcomeMessage">Welcome back!</h1>
              <h2 id="joinMessage">
                Join our platform!
                <br /> place where students can
                <br />
                help each other.
                <br />
                <br />
                <br />
                For anyone, anywhere.
                <br />
                100% free.
              </h2>
            </div>
          </div>
          <div className="col-6">
            <form
              className="form-signin"
              id="formSignIn"
              onSubmit={this.handleSubmit}
            >
              <label htmlFor="inputEmail" className="sr-only">
                Email address
              </label>
              <input
                type="text"
                id="email"
                className="form-control"
                placeholder="Email address"
                onChange={this.handleChangeUsername}
              />
              <label htmlFor="inputPassword" className="sr-only">
                Password
              </label>
              <input
                type="password"
                id="inputPassword"
                className="form-control"
                placeholder="Password"
                onChange={this.handleChangePassword}
              />
              <div className="checkbox mb-3">
                <label>
                  <input type="checkbox" defaultValue="remember-me" /> Remember
                  me
                </label>
              </div>
              <button
                className="btn btn-lg btn-primary btn-block"
                type="submit"
              >
                Sign in
              </button>
            </form>
            <div
              className="btn-group-vertical"
              role="group"
              aria-label="Basic example"
            >
              <button type="button" className="btn btn-outline-light">
                <GoogleLogin
                  clientId="104419111985-q5kvvf8bh6pu6fb215864qsdni9mt07h.apps.googleusercontent.com"
                  buttonText="Login"
                  onSuccess={responseGoogle}
                  onFailure={responseGoogle}
                  cookiePolicy={"single_host_origin"}
                />
              </button>

              <button type="button" className="btn btn-outline-light">
                <GitHubLogin
                  clientId="ce4d254cd12e108f97e0"
                  onSuccess={onSuccess}
                  onFailure={onFailure}
                />
              </button>

              <button type="button" className="btn btn-outline-light">
                <FacebookLogin
                  appId="700968853829126"
                  autoLoad={false}
                  fields="name,email,picture"
                  onClick={responseFacebook}
                  callback={responseFacebook}
                />
              </button>
            <p id="notMember">
              <em>Not a member yet?</em>
              <Link to="/Registration" class="nav-link">
                Sign up
              </Link>
            </p>
          </div>
        </div>
      </div>
      </div>
    );
  }
}

export default Login;
