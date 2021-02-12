import React from "react";
import ReactDOM from "react-dom";
import { Link } from "react-router-dom";
import { GoogleLogin } from "react-google-login";
import FacebookLogin from "react-facebook-login";
import GitHubLogin from "react-github-login";

class Registration extends React.Component {
  render() {
    const responseGoogle = (response) => {
      console.log(response);
    };

    const responseFacebook = (response) => {
      console.log(response);
    };

    const onSuccess = (response) => console.log(response);
    const onFailure = (response) => console.error(response);

    return (
      <div>
        <div className="row">
          <div className="col-6">
            <div id="message">
              <h1 id="welcomeMessage"> Welcome!</h1>
              <h2 id="joinMessage">
                Join our platform!
                <br /> place where student can
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
            <ul className="choice">
              <p id="joinAs">Join as:</p>
              <button
                type="button"
                className="btn btn-outline-primary"
                id="btnChoice"
              >
                Student
              </button>
              <button
                type="button"
                className="btn btn-outline-primary"
                id="btnChoice"
              >
                Educator
              </button>
            </ul>
            <div
              className="btn-group-vertical"
              role="group"
              aria-label="Basic example"
            >
              <button type="button" className="btn btn-outline-primary">
                <GoogleLogin
                  clientId="104419111985-q5kvvf8bh6pu6fb215864qsdni9mt07h.apps.googleusercontent.com"
                  buttonText="Login"
                  onSuccess={responseGoogle}
                  onFailure={responseGoogle}
                  cookiePolicy={"single_host_origin"}
                />
              </button>

              <button type="button" className="btn btn-outline-primary">
                <GitHubLogin
                  clientId="ce4d254cd12e108f97e0"
                  onSuccess={onSuccess}
                  onFailure={onFailure}
                />
              </button>

              <button type="button" className="btn btn-outline-primary">
                <FacebookLogin
                  appId="700968853829126"
                  autoLoad={false}
                  fields="name,email,picture"
                  onClick={responseFacebook}
                  callback={responseFacebook}
                />
              </button>
              <button type="button" className="btn btn-outline-primary">
                {" "}
                <Link to="/UserInfo" class="nav-link">
                  Continue with Email
                </Link>
              </button>
            </div>
            <p id="member">
              <em>Already a member?</em>
              <Link to="/Login" class="nav-link">
                Sign In
              </Link>
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Registration;
