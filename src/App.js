import logo from './logo.svg';
import './App.css';
import NavBar from './Components/NavBar/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Components/Home Page/Home';

function App() {
  return (
    <div className="App ">
     <NavBar />
     <div className="container">
       <Home></Home>
     </div>
    </div>
  );
}

export default App;
