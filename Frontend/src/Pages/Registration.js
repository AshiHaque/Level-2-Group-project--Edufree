import React from "react";
import ReactDOM from "react-dom";
import { Link } from "react-router-dom";
import { GoogleLogin } from "react-google-login";
import FacebookLogin from "react-facebook-login";
import GitHubLogin from "react-github-login";

class Registration extends React.Component {

  responseGoogle = (response) => {
    console.log(response);
    console.log(response.profileObj);
  };

  render() {

    function onSignIn(googleUser) {
      var id_token = googleUser.getAuthResponse().id_token;
    }

    const {OAuth2Client} = require('google-auth-library');
    const client = new OAuth2Client("981603377227-2j90i9n7ag0c4ki2qdj68g190bu3k508.apps.googleusercontent.com");
    async function verify() {
      const ticket = await client.verifyIdToken({
        idToken: "token",
        audience: "981603377227-2j90i9n7ag0c4ki2qdj68g190bu3k508.apps.googleusercontent.com",
      });
    const payload = ticket.getPayload();
    const userid = payload['sub'];
    }
    verify().catch(console.error);
    

    const responseFacebook = (response) => {
      console.log(response);
      //console.log(response.profileObj);
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
                <br /> A place where students can
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
                  clientId="981603377227-2j90i9n7ag0c4ki2qdj68g190bu3k508.apps.googleusercontent.com"
                  buttonText="Login"
                  onSuccess={this.responseGoogle}
                  onFailure={this.responseGoogle}
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
