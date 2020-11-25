import "./App.css";
import Navbar from "./components/Navbar";
import Registration from "./Pages/Registration";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Pages";
function App() {
  return (
    <Router>
      <Navbar /> <Registration />
      <Switch>
        <Route path="/" exact component={Home} />
      </Switch>
    </Router>
  );
}

export default App;
