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
import JavaBasics from "./Pages/JavaBasics";
import JavaVariables from "./Pages/JavaVariables";
import JavaOperators from "./Pages/JavaOperators";

import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import { Component } from "react";

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
          <Route path="/JavaBasics" component={JavaBasics} />
          <Route path="/JavaVariables" component={JavaVariables} />
          <Route path="/ContentJava" component={ContentJava} />
          <Route path="/ContentCSS" component={ContentCSS} />
          <Route path="/TestLoggedIn" component={TestLoggedIn} />
          <Route path="/JavaOperators" component={JavaOperators} />
          <Route path="/UploadFile" component={UploadFile} />
          <Route path="/Dashboard" component={Dashboard} />
        </Switch>

        <Footer />
      </Router>
    </div>
  );
}

const ProtectedRoute = ({ component: Comp, Dashboard, path, ...rest }) => {
  return (
    <Route
      path={path}
      {...rest}
      render={(props) => {
        return Dashboard ? <Comp {...props} /> : <Redirect to="/" />;
      }}
    />
  );
};

export default App;
