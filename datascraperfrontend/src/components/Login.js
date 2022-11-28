import * as React from "react";
import { useRef } from "react";
import TextField from "@mui/material/TextField";
import { Button, Hidden } from "@mui/material";
import Box from "@mui/material/Box";
import List, { listClasses } from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import background from "./media/background1.jpg";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import { ChartBar as ChartBarIcon } from "./icons/chart-bar";

export default function Login() {
  const email = useRef(null);
  const password = useRef(null);
  const navigate = useNavigate();
  const [authError, showError] = useState(false);
  const [errorMessage, setMessage] = useState("");

  function authenticateUser() {
    // console.log(email.current.value);
    // console.log(password.current.value);
    fetch(
      "http://localhost:8080/authenticate?email=" +
        email.current.value +
        "&password=" +
        password.current.value
    )
      .then((response) => response.text())
      .then((text) => {
        console.log(text);
        if (text === "Authentication successful!") {
          fetch("http://localhost:8080/getUser")
            .then((response) => response.json())
            .then((result) => {
              navigate("/home", {state: {
                firstName: result.firstName,
                lastName: result.lastName,
                email: result.email,
                businesses: result.businesses 
              }});
            });
        } else {
          showError(true);
          setMessage(text);
        }
      });
  }

  return (
    <div>
      <Box
        component="form"
        sx={{
          width: "100%",
          height: "100vh",
          mx: "auto",
          display: "flex",
          justifyContent: "center",
          backgroundImage: `url(${background})`,
          backgroundRepeat: "no-repeat",
          backgroundHeight: "100vh",
          backgroundSize: "cover",
        }}
        noValidate
        autoComplete="off"
      >
        
      </Box>
    </div>
  );
}
