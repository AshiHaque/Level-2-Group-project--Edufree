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
         <div className="col-6">
        <p className= "p2">
            EduFree is a Web Application that was created to provide free educational 
            resources for those who are passionate about learning.

</p>
<p className= "p2">
            Within this website, we have created the opportunity for anyone to learn from various 
            subjects.
           
</p>
<p className= "p2">
            All for free!
            
</p>

</div> 
</div>
</div>
        </div>)}}
    export default Aboutus;
