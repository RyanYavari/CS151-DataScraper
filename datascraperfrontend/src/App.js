import logo from "./logo.svg";
import "./App.css";
import { useEffect } from "react";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Dashboard from "./components/Dashboard";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { ImportContacts } from "@mui/icons-material";
import Index from './pages/index';
import Services from './pages/services';
import Customer from './pages/Customer_Support';

function App() {

  var loadScript = function(src) {
    var tag = document.createElement('script');
    tag.async = false;
    tag.src = src;
    document.getElementsByTagName('body')[0].appendChild(tag);
  }



loadScript('assets/js/jquery.min.js')
loadScript('assets/js/jquery.scrollex.min.js')
loadScript('assets/js/browser.min.js')
loadScript('assets/js/breakpoints.min.js')
loadScript('assets/js/util.js')
loadScript('assets/js/main.js')

return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
        <Route path="/home" element={<Dashboard />}></Route>
        <Route path="/Login" element={<Login />}></Route>
        <Route path="/Customer" element={<Customer />}></Route>
        <Route path="/Services" element={<Services />}></Route>
      </Routes>
  </BrowserRouter> 

  );
}

export default App;
