import React from 'react';
import {Link} from "react-router-dom";
import axios from "axios";


class Login extends React.Component{
  state={
      username: '',
      password: ''
  
  }

 
  handleChange = event => {
    this.setState({ username: event.target.value });
    this.setState({ password: event.target.value });
  }

  handleSubmit = event => {
    event.preventDefault();

    const user = {
      username: this.state.username,
      password: this.state.password
    };

    axios.post('/Login', { user })
      .then(res => {
        console.log(res);
        console.log(res.data);
      })
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



          <form className="form-signin" id="formSignIn"  onSubmit={this.handleSubmit}>
            <label htmlFor="inputEmail" className="sr-only">Email address</label>
            <input type="email" id="inputEmail" className="form-control" placeholder="Email address" onChange={this.handleChange}/>
            <label htmlFor="inputPassword" className="sr-only">Password</label>
            <input type="password" id="inputPassword" className="form-control" placeholder="Password"  onChange={this.handleChange} />
            <div className="checkbox mb-3">
              <label>
                <input type="checkbox" defaultValue="remember-me" /> Remember me
              </label>
            </div>
            <button className="btn btn-lg btn-primary btn-block" type="submit" >Sign in</button>
          </form>


          <p id="notMember"><em>Not a member yet?</em><Link to="/Registration" class="nav-link">Sign up</Link></p>
        </div>  
      </div>
    </div>
    )
  }
}

export default Login
