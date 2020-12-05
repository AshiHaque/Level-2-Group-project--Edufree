import React,{Component} from "react";


class Home extends React.Component{
  render(){
    return(
      <div>     
          <div class="row">
            <div class="col-6">
              <img src="assets/images/STUDENT-IMM.png" width="900" height="600" alt=""></img>
            </div>
            <div class="col-6">
              <h1 class="title" id="slogan"> Made for Students,by Students</h1>
              <p id="maininfo">A platform where anyone can learn for 
                free, with endless resources available to
                support every student.</p>
              <p id="howDoesItWork"><em>How does it work?</em></p>
              <button type="button" class="btn btn-primary btn-lg">Learn</button>
              <button type="button" class="btn btn-primary btn-lg">Teach</button>
            </div>
          </div>
        </div>
     
    )
  }
}

export default Home;
