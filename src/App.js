import "./App.css";
import NavBar from "./Components/NavBar/NavBar";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./Components/Home Page/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./Components/LoginPage/Login";
import Destination from "./Components/Destination/Destination";

function App() {
  return (
    <div className="App ">
      <Router>
      <NavBar />
        <Switch>
          <Route path="/bike">
            <Login></Login>
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route path="/destination">
            <Destination />
          </Route>
          <Route exact path="/">
            <Home></Home>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
