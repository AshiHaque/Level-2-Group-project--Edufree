import React from "react";
import ReactDOM from "react-dom";
import { Link } from "react-router-dom";


class Registration extends React.Component {
  render() {

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
            <ul className="continueWith">
            <button
              type="button"
              className="btn btn-outline-primary btn-lg"
              >
                {" "}
                <Link to="/UserInfo" class="nav-link">
                  Continue with Email
                </Link>
            </button>
            </ul>
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
