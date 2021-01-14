import React from 'react';
import {Link} from "react-router-dom";
import axios from "axios";


class Login extends React.Component{
  state={
    data: {
      username: "",
      password: ""
    }
  }

  onClick(){
    fetch('https://localhost:8080/login').then(response => response.data.map())

    axios.post('https://localhost:8080/login', data)
  }
  render(){
    return(
    <div>
      <div className="row">
        <div className="col-6">
          <div id="message">
            <h1 id="welcomeMessage">Welcome back!</h1>
            <h2 id="joinMessage">
              Join our platform!
              <br /> place where students can<br />
              help each other.
              <br /><br />
              <br />For anyone, anywhere.<br /> 
              100% free.
            </h2>
          </div>
        </div>
        <div className="col-6">
          <form className="form-signin" id="formSignIn">
            <label htmlFor="inputEmail" className="sr-only">Email address</label>
            <input type="email" id="inputEmail" className="form-control" placeholder="Email address" required autofocus value={data.username}/>
            <label htmlFor="inputPassword" className="sr-only">Password</label>
            <input type="password" id="inputPassword" className="form-control" placeholder="Password" required value={data.password} />
            <div className="checkbox mb-3">
              <label>
                <input type="checkbox" defaultValue="remember-me" /> Remember me
              </label>
            </div>
            <button className="btn btn-lg btn-primary btn-block" type="submit" onClick={this.onClick}>Sign in</button>
          </form>
          <p id="notMember"><em>Not a member yet?</em><Link to="/Registration" class="nav-link">Sign up</Link></p>
        </div>  
      </div>
    </div>
    )
  }
}

export default Login
