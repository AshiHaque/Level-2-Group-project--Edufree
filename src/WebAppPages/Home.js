import React from "react";
import "../App.css";
import Navbar from "./components/Navbar";
import Button from ".components/Button";
import "./Homepage.css";

function Homepage() {
  return (
    <div className="homepage-container">
      <h1>EduFree</h1>
      <p>100% free. By Students. For students.</p>
      <div className="homepage-btns">
        <Navbar />
        <Button
          className="btns"
          buttonStyle="btn--outline"
          buttonSize="btn--large"
        >
          LEARN
        </Button>
      </div>
    </div>
  );
}

export default Homepage;
