import React from 'react';
import students from '../images/STUDENT-IMM.png';


class TestLoggedIn extends React.Component{


  render(){
      return(
        <div>     
        <div class="row">
          <div class="col-6">
            <img src={students} width="900" height="500" alt="student picture"></img>
          </div>
          <div class="col-6">
            <h1 class="title" id="slogan"> You've successfully logged In!</h1>
          </div>
        </div>
      </div>
    )
  }
}

export default TestLoggedIn
