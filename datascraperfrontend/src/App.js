import logo from "./logo.svg";
import "./App.css";
import { useEffect } from "react";
import Login from "./components/Login";

function App() {

  // const [state, setState] = useState('start')
  // useEffect( () => {
  //   fetch('http://localhost:8080/hello').then(response=>response.text).then(result=>console.log(result));
  // }, []);

  return (
    <Login/>
  );
}

export default App;
