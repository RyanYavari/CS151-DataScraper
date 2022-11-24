import logo from "./logo.svg";
import "./App.css";
import { useEffect } from "react";
import Login from "./components/Login";
import Signup from "./components/Signup";

const sectionStyle = {
  height: "100vh",

  backgroundImage:
    "url('./media/background.png') ",

  backgroundRepeat: "no-repeat",
  backgroundSize: "cover"
};

function App() {

  // const [state, setState] = useState('start')
  // useEffect( () => {
  //   fetch('http://localhost:8080/hello').then(response=>response.text).then(result=>console.log(result));
  // }, []);

  return (
    <Signup/>
  );
}

export default App;
