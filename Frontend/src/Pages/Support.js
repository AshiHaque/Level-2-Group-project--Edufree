import React, { useState, useEffect } from "react";
import "../css/Support.css";



class Support extends React.Component {
    render() {
  return (

   
    <div className = "app">
      
   
    
      <form className="form" >
      <h1> Contact Us </h1>
    
      <label>Name</label>
      <input
        placeholder="Your Name"/>
    
      <label>Email</label>
      <input
        placeholder="Your Email"/>
  

      <label>Message</label>

      <textarea placeholder="What's your message?"></textarea>

      <button
        type="submit">
        Submit
      </button>
    
  
    </form>
    </div>
  
  );

  }}

export default Support;
  