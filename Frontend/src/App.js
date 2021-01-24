import React from "react";
import "./App.css";
import ContentJava from "./Pages/ContentJava";
import ContentCSS from "./Pages/ContentCSS";
import Home from "./Pages/Home";
import Registration from"./Pages/Registration";
import Login from "./Pages/Login";
import UserInfo from "./Pages/UserInfo";
import Header from "./components/Header";
import Footer from "./components/Footer";
import TestLoggedIn from "./Pages/TestLoggedIn";
import ContentTest from "./Pages/ContentTest";
import {BrowserRouter as Router,Route,Switch} from "react-router-dom";

function App() {
  return (
    <div>
      <Router>

        <Header/>
          <Switch>
            <Route exact path="/Home" component={Home} />
            <Route path="/Registration" component={Registration} />
            <Route path="/Login" component={Login} />
            <Route path="/UserInfo" component={UserInfo} />
            <Route path="/ContentJava" component={ContentJava} />
            <Route path="/ContentCSS" component={ContentCSS} />
            <Route path="/TestLoggedIn" component={TestLoggedIn} />
            <Route path="/ContentTest" component={ContentTest} />
          </Switch>

        <Footer/>

      </Router>
   
    </div>
 
  );
}

export default App;
