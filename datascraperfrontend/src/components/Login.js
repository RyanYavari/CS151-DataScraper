import * as React from "react";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import { ClassNames } from "@emotion/react";

export default function Login() {
  return (
    <div>
      <form className="">
        <TextField
          id="outlined-helperText"
          label="Email"
          autoComplete="current-email"
        />
        <TextField
          id="outlined-password-input"
          label="Password"
          type="password"
          autoComplete="current-password"
        />
        <Button variant="outlined">Login</Button>
      </form>
    </div>
  );
}
