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
import UploadFile from "./Pages/UploadFile";
import ContentJava from "./Pages/ContentJava";
import JavaBasics from "./Pages/JavaBasics";
import JavaVariables from "./Pages/JavaVariables";
import JavaOperators from "./Pages/JavaOperators";
import UserProfile from "./Pages/UserProfile";
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
          <Route path="/JavaBasics" component={JavaBasics} />
          <Route path="/JavaVariables" component={JavaVariables} />
          <Route path="/ContentJava" component={ContentJava} />
          <Route path="/ContentCSS" component={ContentCSS} />
          <Route path="/JavaOperators" component={JavaOperators} />
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
    (
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
    ))
  );
};

export default App;
