import "./App.css";
import NavBar from "./Components/NavBar/NavBar";
// import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./Components/Home Page/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./Components/LoginPage/Login";
import Destination from "./Components/Destination/Destination";
import { useContext, useState } from "react";
import { userContext } from "./Components/Context/Context";
import PrivateRoute from "./Components/PrivateRoute/PrivateRoute";
import Profile from "./Components/Profile/Profile";
import PrivecyPolicy from "./Components/PrivecyPolicy/PrivecyPolicy";

function App() {
  const [user, setUser] = useState({
    isSignedIn: false,
    name:'',
    email: '',
    password: '',
    confirmPassword: '',
    image: ''
  })
  const [newUser, setNewUser] = useState(false);
  const [typeOfVehicle, setTypeOfVehicle] = useState('');

  const userInfo = useContext(userContext)
  console.log(userInfo)
  return (
    <div className="App ">
    <userContext.Provider value={[user, setUser, newUser, setNewUser, typeOfVehicle, setTypeOfVehicle]}>
      <Router>
      <NavBar />
        <Switch>
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route path="/privacy-policy">
            <PrivecyPolicy></PrivecyPolicy>
          </Route>
          <PrivateRoute path='/destination/:ride'>
            <Destination></Destination>
          </PrivateRoute>
          <PrivateRoute exact path='/destination/'>
            <Destination></Destination>
          </PrivateRoute>
          <PrivateRoute path='/profile'>
            <Profile></Profile>
          </PrivateRoute>
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
