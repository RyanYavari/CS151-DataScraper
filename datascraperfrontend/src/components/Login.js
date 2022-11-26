import * as React from "react";
import { useRef } from "react";
import TextField from "@mui/material/TextField";
import { Button, Hidden } from "@mui/material";
import Box from "@mui/material/Box";
import List, { listClasses } from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import background from "./media/background.jpg";
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
    console.log(email.current.value);
    console.log(password.current.value);
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
                handles: result.handles 
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
        <div>
          <List
            id="list"
            sx={{
              mx: "auto",
              width: 400,
              mt: authError ? 19 : 21,
              mb: 20,
              height: authError ? 405 : 380,
              bgcolor: (theme) =>
                theme.palette.mode === "dark" ? "#101010" : "grey.50",
              color: (theme) =>
                theme.palette.mode === "dark" ? "grey.300" : "grey.800",
              border: "1px solid",
              borderColor: (theme) =>
                theme.palette.mode === "dark" ? "grey.800" : "grey.300",
              borderRadius: 2,
              textAlign: "center",
              fontSize: "0.875rem",
              fontWeight: "700",
            }}
          >
            <ListItem
              sx={{
                mx: "auto",
                width: 300,
                justifyContent: "center",
                textAlign: "center",
                fontSize: "1.875rem",
                fontWeight: "700",
              }}
            >
              <Box
                sx={{
                  width: "100%",
                  height: "100%",
                  mx: "auto",
                  display: "flex",
                  justifyContent: "center",
                  backgroundColor: "grey.50",
                }}
              >
                <List>
                  <ListItem
                    sx={{
                      mb: 0,
                      pb: 0,
                      fontSize: "1.875rem",
                    }}
                  >
                    Data
                  </ListItem>
                  <ListItem
                    sx={{
                      mt: 0,
                      pt: 0,
                    }}
                  >
                    <ChartBarIcon
                      sx={{
                        mr: 1,
                        fontSize: "1.875rem",
                      }}
                      fontSize="small"
                    />{" "}
                    Scraper
                  </ListItem>
                </List>
              </Box>
            </ListItem>
            <ListItem
              sx={{
                mx: "auto",
                width: 300,
              }}
            >
              <TextField
                sx={{
                  bgcolor: (theme) => theme.palette.mode === "#101010",
                  width: 300,
                }}
                id="emailInput"
                label="Email"
                autoComplete="current-email"
                inputRef={email}
                required
                error={authError}
              />
            </ListItem>
            <ListItem
              sx={{
                mx: "auto",
                width: 300,
              }}
            >
              <TextField
                sx={{
                  bgcolor: (theme) => theme.palette.mode === "#101010",
                  width: 300,
                }}
                id="passwordInput"
                label="Password"
                type="password"
                autoComplete="current-password"
                inputRef={password}
                error={authError}
                required
                helperText={errorMessage}
              />
            </ListItem>
            <ListItem
              sx={{
                mx: "auto",
                width: 300,
              }}
            >
              <Button
                variant="outlined"
                onClick={authenticateUser}
                sx={{
                  bgcolor: (theme) => theme.palette.mode === "#101010",
                  mx: "auto",
                  width: 105,
                }}
              >
                Login
              </Button>
            </ListItem>
            <ListItem
              sx={{
                mx: "auto",
                width: 300,
                justifyContent: "center",
                textAlign: "center",
                fontSize: "0.875rem",
                fontWeight: "350",
              }}
            >
              <label>
                Don't have an account? <Link to="/signup">Sign up</Link>!
              </label>
            </ListItem>
          </List>
        </div>
      </Box>
    </div>
  );
}
