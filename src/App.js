import "./App.css";
import NavBar from "./Components/NavBar/NavBar";
// import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./Components/Home Page/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./Components/LoginPage/Login";
import Destination from "./Components/Destination/Destination";
import { useContext, useState } from "react";
import { userContext } from "./Components/Context/Context";

function App() {
  const [user, setUser] = useState({
    isSignedIn: false,
    name:'',
    email: '',
    image: ''
  })
  const userInfo = useContext(userContext)
  console.log(userInfo)
  return (
    <div className="App ">
    <userContext.Provider value={[user, setUser]}>
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
      </userContext.Provider>
    </div>
  );
}

export default App;
