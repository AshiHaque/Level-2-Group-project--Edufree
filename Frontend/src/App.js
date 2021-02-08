import React from "react";
import "./App.css";
import ContentPage from "./Pages/ContentPage";
import ContentCSS from "./Pages/ContentCSS";
import Home from "./Pages/Home";
import Registration from "./Pages/Registration";
import Login from "./Pages/Login";
import Dashboard from "./Pages/Dashboard";
import UserInfo from "./Pages/UserInfo";
import Header from "./components/Header";
import Footer from "./components/Footer";
import TestLoggedIn from "./Pages/TestLoggedIn";
import UploadFile from "./Pages/UploadFile";
import ContentJava from "./Pages/ContentJava";
import JavaDataType from "./Pages/JavaDataType";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <div>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/Registration" component={Registration} />
          <Route path="/Login" component={Login} />
          <Route path="/UserInfo" component={UserInfo} />
          <Route path="/ContentPage" component={ContentPage} />
          <Route path="/JavaDataType" component={JavaDataType} />
          <Route path="/ContentJava" component={ContentJava} />
          <Route path="/ContentCSS" component={ContentCSS} />
          <Route path="/TestLoggedIn" component={TestLoggedIn} />
          <Route path="/UploadFile" component={UploadFile} />
          <Route path="/Dashboard" component={Dashboard} />
        </Switch>

        <Footer />
      </Router>
    </div>
  );
}

export default App;
