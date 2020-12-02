import React,{Component} from "react";


class Home extends React.Component{
  render(){
    return(
      <div> 
          <nav class="navbar navbar-expand-xl navbar-primary bg-light">
            <ul class="navbar-nav">
              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Courses
                </a>
                <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                  <a class="dropdown-item" href="#">Maths</a>
                  <a class="dropdown-item" href="#">Programming</a>
                  <a class="dropdown-item" href="#">Data and Information</a>
                </div>
              </li>
              <li>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                  <span class="navbar-toggler-icon"></span>
                </button> 
                <form class="form-inline">
                  <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/> 
                  <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                </form>
              </li>
            </ul>

            <ul class="navbar mx-auto">
              <a href="/index.html">
                <img src="assets/Resources/LogoFull.png" width="150" height="50" alt="" loading="lazy"></img>
              </a>
            </ul>

            <ul class="navbar-nav ml-auto">
              <li class="nav-item">
                <a class="nav-link" href="#">Forum</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="registration.html">Sign In</a>
              </li>

            </ul>
          </nav>
    
          <div class="row">
            <div class="col-6">
              <img src="/assets/Resources/STUDENT-IMM.png" width="900" height="600" alt=""></img>
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
      
          <footer class="footer">
            <div class="container-fluid">
              <p  style={{paddingTop:30}}> © Copyright 2020 EduFree </p>
            </div>
          </footer>

        </div>
     
    )
  }
}

export default Home;
