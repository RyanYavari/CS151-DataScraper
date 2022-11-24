import logo from "./logo.svg";
import "./App.css";
import { useEffect } from "react";
import Login from "./components/Login";
import Signup from "./components/Signup";
import { ReactDOM } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
} from "react-router-dom";


function App() {

  // const [state, setState] = useState('start')
  // useEffect( () => {
  //   fetch('http://localhost:8080/hello').then(response=>response.text).then(result=>console.log(result));
  // }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login/>}></Route>
        <Route path="/signup" element={<Signup />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
