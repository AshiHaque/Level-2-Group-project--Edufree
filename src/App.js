import React from "react";
import "./App.css";
import Content from "./Pages/Content";
import Home from "./Pages/Home";
import Registration from"./Pages/Registration";
import Login from "./Pages/Login";
import Header from "./components/Header";
import Footer from "./components/Footer";
import {BrowserRouter as Router,Route,Switch} from "react-router-dom";

function App() {
  return (
    <div>
      <Router>

        <Header/>
          <Switch>
            <Route exact path="/home" component={Home} />
            <Route path="/Registration" component={Registration} />
            <Route path="/Login" component={Login} />
            <Route path="/Content" component={Content} />
          </Switch>

        <Footer/>

      </Router>
   
    </div>
 
  );
}

export default App;
