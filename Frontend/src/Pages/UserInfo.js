import React from 'react';
import {Link,Redirect} from "react-router-dom";



class UserInfo extends React.Component{

  state={
      redirect: null,
      username: '',
      password: ''
  
  }

 

  handleChangeUsername = event => {
    this.setState({ username: event.target.value });
  }

  handleChangePassword = event => {
    this.setState({ password: event.target.value });
  }

  handleSubmit = event => {
    event.preventDefault();

    const username = this.state.username;
    const password = this.state.password;
  
  
    const user = {
      username,
      password,  

  }

    fetch('http://localhost:8080/login', {
      method: 'POST',
      body: JSON.stringify(user),
      headers:{
      'Content-Type': 'application/json'
      }
  }).then(res => {
    this.setState({ redirect: "/TestLoggedIn" });
     console.log("User Logged In");
  })
  .catch(error => console.error('Error:', error));
}


  render(){
    if (this.state.redirect) {
      return <Redirect to={this.state.redirect} />
    }
    return(
    <div>
      <div className="row">
        <div className="col-6">
          <div id="message">
            <h1 id="welcomeMessage">Create your account now!</h1>
            <h2 id="joinMessage">
              Join our platform!
              <br /> place where students can<br />
              help each other.
              <br />
            </h2>
          </div>
        </div>
        <div className="col-6">



          <form className="form-signin" id="formSignIn"  onSubmit={this.handleSubmit}>
    
            <input type="text" id="email" className="form-control" placeholder="Email address" onChange={this.handleChangeUsername}/>
            
            <input type="password" id="inputPassword" className="form-control" placeholder="Password"  onChange={this.handleChangePassword} />

            <input type="text" id="username" className="form-control" placeholder="Username" onChange={this.handleChangeUsername}/>
            
            <input type="text" id="name" className="form-control" placeholder="Name" onChange={this.handleChangeUsername}/>
            
            <input type="text" id="surname" className="form-control" placeholder="Surname" onChange={this.handleChangeUsername}/>

            <input type="date" id="dob" className="form-control" placeholder="DD/MM/YYYY" onChange={this.handleChangeUsername}/> Where are you studying?
            
            <br/>
            <input type="radio" id="highschool" name="radio"/>HighSchool
            <input type="radio" id="university" name="radio"/>University
            <input type="radio" id="na" name="radio"/>N/A

            <button className="btn btn-lg btn-primary btn-block" type="submit" >Creat your account!</button>
          </form>
        </div>  
      </div>
    </div>
    )
  }
}

export default UserInfo
