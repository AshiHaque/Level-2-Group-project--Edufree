import React from "react";
import "../App.css";
import Navbar from "./components/Navbar";
import Button from ".components/Button";
import "./Homepage.css";

function Home() {
  return (
    <div className="home-container">
      <h1>EduFree</h1>
      <p>100% free. By Students. For students.</p>
      <div className="home-btns">
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

export default Home;
