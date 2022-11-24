import * as React from "react";
import { useRef } from "react";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import { ClassNames } from "@emotion/react";

export default function Login() {
  const email = useRef(null);
  const password = useRef(null);

  function authenticateUser() {
    console.log(email.current.value);
    console.log(password.current.value);
    fetch("http://localhost:8080/authenticate?email=" + email.current.value + "&password=" + password.current.value).then(response=>response.text).then(result=>console.log(result));
  }

  return (
    <div>
      <form>
        <TextField
          id="emailInput"
          label="Email"
          autoComplete="current-email"
          inputRef={email}
        />
        <TextField
          id="passwordInput"
          label="Password"
          type="password"
          autoComplete="current-password"
          inputRef={password}
        />
        <Button variant="outlined" onClick={authenticateUser}>
          Login
        </Button>
      </form>
    </div>
  );
}
