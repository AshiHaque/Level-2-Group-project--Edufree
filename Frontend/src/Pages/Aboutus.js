import React from 'react'
import ReactDOM from "react-dom";
import "../css/About.css";
import students from "../images/STUDENT-IMM.png";


class Aboutus extends React.Component {
    render() {
      return ( 
        <div>
     
        <div >
        <h1>WHO WE ARE.</h1>  
        <div className="row">


        <div className="col-6">
              <img
                src={students}
               
                id="studentpic"
                alt="student picture"
                className = "center"
               
              ></img>
         </div>
        <p className= "p2">
            EduFree is a Web Application that was created to provide free educational 
            resources for those who are passionate about learning.
</p>
</div> 
</div>
        </div>)}}
    export default Aboutus;
