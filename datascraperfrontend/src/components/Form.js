import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { useState } from "react";
import MenuItem from "@mui/material/MenuItem";
import List, { listClasses } from "@mui/material/List";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import Checkbox from "@mui/material/Checkbox";
import ListItemText from "@mui/material/ListItemText";
import OutlinedInput from "@mui/material/OutlinedInput";
import { Button, Chip, ListItem } from "@mui/material";
import MenuProps from "@mui/material/Select";
import background from "./media/background.jpg";
import { useEffect } from "react";


export default function Form({ user }) {
  const [personName, setPersonName] = React.useState([]);
  const [keywords, setKeywords] = useState([]);
  const windowWidth = window.innerWidth;

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setPersonName(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };

  const names = [
    "Technology",
    "Sports",
    "Food",
    "Transportation",
    "Investment",
  ];

  function createNewBusiness() {}

  console.log(windowWidth - 280);

  return (
    <div>
      <Box
        component="form"
        sx={{
          "& .MuiTextField-root": { m: 1, width: "25ch" },
          width: {windowWidth} - 280,
          height: "100vh",
          zIndex: 100,
          pl: 35,
          overflow: "hidden",
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
        <List
            sx={{
                mt: 17,
                width: "35%",
                height: "60%",
                bgcolor: (theme) =>
                theme.palette.mode === "dark" ? "#101010" : "grey.50",
              color: (theme) =>
                theme.palette.mode === "dark" ? "grey.300" : "grey.800",
              border: "1px solid",
              borderColor: (theme) =>
                theme.palette.mode === "dark" ? "grey.800" : "grey.300",
              borderRadius: 2,
            }}
        >
          <ListItem
            sx={{
                mt: 3,
              fontSize: "1.875rem",
              fontWeight: "500",
              justifyContent: "center",
            }}
          >
            <label>New Data Scraping Profile</label>
          </ListItem>
          <ListItem
            sx={{
                justifyContent: "center",
            }}
          >
            <div>
              <TextField
                required
                id="outlined-required"
                label="Business Name"
              />
            </div>
          </ListItem>
          <ListItem
            sx={{
                justifyContent: "center",
            }}
            >
            <div>
              <FormControl sx={{ m: 1, width: "25ch" }}>
                <InputLabel id="demo-multiple-checkbox-label">
                  Type of Business
                </InputLabel>
                <Select
                  labelId="demo-multiple-checkbox-label"
                  id="demo-multiple-checkbox"
                  multiple
                  value={personName}
                  onChange={handleChange}
                  input={<OutlinedInput label="Type of Business" />}
                  renderValue={(selected) => selected.join(", ")}
                  MenuProps={MenuProps}
                >
                  {names.map((name) => (
                    <MenuItem key={name} value={name}>
                      <Checkbox checked={personName.indexOf(name) > -1} />
                      <ListItemText primary={name} />
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </div>
          </ListItem>
          <ListItem
            sx={{
                justifyContent: "center",
            }}
          >
            <TextField
              required
              id="outlined-required"
              label="Specific Keywords"
            />
          </ListItem>
          <ListItem
            sx={{
                mx: "auto",
                justifyContent: "center",
            }}
            >
            <Button
              variant="outlined"
              onClick={createNewBusiness}
              sx={{
                bgcolor: (theme) => theme.palette.mode === "#101010",
                width: 100,
              }}
            >
              Create
            </Button>
          </ListItem>
        </List>
      </Box>
    </div>
  );
}
