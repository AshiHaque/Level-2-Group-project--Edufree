import React,{Component} from 'react';
import {Link} from "react-router-dom";
class Registration extends React.Component{
  render(){
    return(
    <div>
      <div className="row">
        <div className="col-6">
          <div id="message">
            <h1 id="welcomeMessage"> Welcome!</h1>
            <h2 id="joinMessage">
              Join our platform!
              <br /> place where student can<br />
              help each other.
              <br /><br />
              <br />For anyone, anywhere.<br /> 
              100% free.
            </h2>
          </div>
        </div>
        <div className="col-6">
          <ul className="choice">
            <p id="joinAs">Join as:</p>
            <button type="button" className="btn btn-outline-primary" id="btnChoice">Student</button>
            <button type="button" className="btn btn-outline-primary" id="btnChoice">Educator</button>
          </ul>
          <div className="btn-group-vertical" role="group" aria-label="Basic example">
            <button type="button" className="btn btn-outline-primary"> <img src="Resources/GoogleLogo.png" width={30} height={30} style={{textAlign: 'center'}} />Continue with Google</button>
            <button type="button" className="btn btn-outline-primary"> <img src="Resources/FacebookLogo.png" width={30} height={30} style={{textAlign: 'center'}} />Continue with Facebook</button>
            <button type="button" className="btn btn-outline-primary"> <img src="Resources/EmailLogo.png" width={30} height={30} style={{textAlign: 'center'}} />Continue with Email</button>
          </div>
          <p id="member"><em>Already a member?</em><Link to="/Login" class="nav-link">Sign In</Link></p>
        </div>  
      </div>
    </div>
    )
  }
}

export default Registration
