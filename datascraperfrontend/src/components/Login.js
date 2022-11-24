import * as React from "react";
import { useRef } from "react";
import TextField from "@mui/material/TextField";
import { Button, Hidden } from "@mui/material";
import { ClassNames } from "@emotion/react";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";

export default function Login() {
  const email = useRef(null);
  const password = useRef(null);

  function authenticateUser() {
    console.log(email.current.value);
    console.log(password.current.value);
    fetch(
      "http://localhost:8080/authenticate?email=" +
        email.current.value +
        "&password=" +
        password.current.value
    )
      .then((response) => response.text)
      .then((result) => console.log(result));
  }

  return (
    <Box
      component="form"
      sx={{ 
        width: "100%",  
        bgcolor: "background.paper",
        mx: "auto", 
        display: 'flex',
        justifyContent: 'center'
      }}
      noValidate
      autoComplete="off"
    >
      <div>
        <List
          sx={{
            mx: "auto",
            width: 500,
            mt: 25,
            mb: 20,
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
              fontWeight: "700"
            }}
            >
              <label>DataScraper</label>
          </ListItem>
          <ListItem
            sx={{
              mx: "auto",
              width: 300,
            }}
          >
            <TextField
              sx={{
                bgcolor: (theme) =>
                  theme.palette.mode === "light" ? "#FFFFFF" : "white",
                width: 300,
              }}
              id="emailInput"
              label="Email"
              autoComplete="current-email"
              inputRef={email}
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
                bgcolor: (theme) =>
                  theme.palette.mode === "light" ? "#FFFFFF" : "white",
                width: 300,
              }}
              id="passwordInput"
              label="Password"
              type="password"
              autoComplete="current-password"
              inputRef={password}
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
                bgcolor: (theme) =>
                  theme.palette.mode === "light" ? "#FFFFFF" : "white",
                mx: "auto",
              }}
            >
              Login
            </Button>
          </ListItem>
        </List>
      </div>
    </Box>
  );
}