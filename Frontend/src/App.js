import React from "react";
import "./App.css";
import "./css/Support.css";
import "./css/Userprofile.css";

import ContentPage from "./Pages/ContentPage";
import Aboutus from "./Pages/Aboutus";
import ContentCSS from "./Pages/ContentCSS";
import Home from "./Pages/Home";
import Registration from "./Pages/Registration";
import Login from "./Pages/Login";
import Dashboard from "./Pages/Dashboard";
import Support from "./Pages/Support";
import UserInfo from "./Pages/UserInfo";
import Header from "./components/Header";
import Footer from "./components/Footer";
import UploadFile from "./Pages/UploadFile";
import ContentJava from "./Pages/ContentJava";
import JavaBasics from "./Pages/JavaBasics";
import JavaVariables from "./Pages/JavaVariables";
import JavaOperators from "./Pages/JavaOperators";
import UserProfile from "./Pages/UserProfile";
import Forum from "./Pages/Forum";
import ClassesPage from "./Pages/ClassesPage";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import Cookies from "js-cookie";

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
          <Route path="/Aboutus" component={Aboutus} />
          <Route path="/Support" component={Support} />
          <Route path="/JavaBasics" component={JavaBasics} />
          <Route path="/JavaVariables" component={JavaVariables} />
          <Route path="/ContentJava" component={ContentJava} />
          <Route path="/ContentCSS" component={ContentCSS} />
          <Route path="/JavaOperators" component={JavaOperators} />
          <Route path="/ClassesPage" component={ClassesPage} />
          <ProtectedRoute path="/Forum" component={Forum} />
          <ProtectedRoute path="/UserProfile" component={UserProfile} />
          <ProtectedRoute path="/UploadFile" component={UploadFile} />
          <ProtectedRoute path="/Dashboard" component={Dashboard} />
        </Switch>

        <Footer />
      </Router>
    </div>
  );
}

const ProtectedRoute = ({
  component: Comp,
  Dashboard,
  UploadFile,
  UserProfile,
  Forum,
  path,
  ...rest
}) => {
  return (
    console.log(Cookies.get("user")),
    ((
      <Route
        path={path}
        {...rest}
        render={(Dashboard) => {
          return Cookies.get("user") === null ||
            Cookies.get("user") === undefined ? (
            (window.alert("Please Log In"), (<Redirect to="/Login" />))
          ) : (
            <Comp {...Dashboard} />
          );
        }}
      />
    ),
    (
      <Route
        path={path}
        {...rest}
        render={(UploadFile) => {
          return Cookies.get("user") === null ||
            Cookies.get("user") === undefined ? (
            (window.alert("Please Log In"), (<Redirect to="/Login" />))
          ) : (
            <Comp {...UploadFile} />
          );
        }}
      />
    ),
    ((
      <Route
        path={path}
        {...rest}
        render={(UserProfile) => {
          return Cookies.get("user") === null ||
            Cookies.get("user") === undefined ? (
            (window.alert("Please Log In"), (<Redirect to="/Login" />))
          ) : (
            <Comp {...UserProfile} />
          );
        }}
      />
    ),
    (
      <Route
        path={path}
        {...rest}
        render={(Forum) => {
          return Cookies.get("user") === null ||
            Cookies.get("user") === undefined ? (
            (window.alert("Please Log In"), (<Redirect to="/Login" />))
          ) : (
            <Comp {...Forum} />
          );
        }}
      />
    )))
  );
};

export default App;
