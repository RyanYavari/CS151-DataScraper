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
import background from "./media/background1.jpg";
import { useEffect } from "react";
import { useRef } from "react";
import Stack from "@mui/material/Stack";

export default function Form({ user, setBusinesses, showNewBusinessForm, setBusinessIdx }) {
  const [personName, setPersonName] = React.useState([]);
  const windowWidth = window.innerWidth;
  const businessName = useRef(null);
  const [keywords, setBusinessType] = useState([]);
  const [hashtags, setBusinessKeywords] = useState([]);
  const businessKeyword = useRef(null);
  const [showChip, setShowChip] = useState(false);

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setPersonName(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
    setBusinessType(value);
  };

  const names = [
    "Technology",
    "Sports",
    "Food",
    "Transportation",
    "Education",
    "Health",
    "Entertainment",
    "Finance",
    "Manufacturing",
    "Fashion"
  ];

  function createNewBusiness() {
    const business = {
      name: businessName.current.value,
      keywords: { keywords },
      hashtags: { hashtags },
      handles: []
    };
    fetch("http://localhost:8080/addNewBusiness?businessName=" + business.name
      +"&keywords=" + keywords + "&hashtags=" + hashtags)
      .then((response) => response.text())
      .then((result) => {
        console.log(JSON.parse(result).businesses);
        setBusinesses(JSON.parse(result).businesses);
        setBusinessIdx(JSON.parse(result).businesses.length - 1);
        showNewBusinessForm(false);
      });
  }

  function createChip(e) {
    if (e.key === "Enter" && hashtags.length < 5) {
      setShowChip(true);
      const newBusinessKeywords = [...hashtags, businessKeyword.current.value];
      setBusinessKeywords(newBusinessKeywords);
      businessKeyword.current.value = "";
    } 
    console.log(hashtags);
  }

  const handleDelete = (e, value) => {
    if (hashtags.length == 1) {
      setShowChip(false);
      console.log(showChip);
    }
    e.preventDefault();
    setBusinessKeywords(hashtags.filter((keyword) => keyword !== value));
  }

  return (
    <div>
      <Box
        component="form"
        sx={{
          "& .MuiTextField-root": { m: 1, width: "25ch" },
          width: { windowWidth } - 280,
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
            mt: showChip ? 13 : 15,
            width: "40%",
            height: showChip ? "70%" : "65%",
            bgcolor: "#fcfcfc",
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
              mb: 1,
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
            <TextField
              required
              id="outlined-required"
              label="Business Name"
              inputRef={businessName}
            />
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
              onKeyDown={createChip}
              helperText="Hit 'Enter' after each keyword"
              inputRef={businessKeyword}
            />
          </ListItem>
          <ListItem
            sx={{
              mx: "auto",
              justifyContent: "center",
            }}
          >
            <Stack direction="row" spacing={1} width="35%"
              sx={{
                mx: "auto",
                justifyContent: "center",
              }}
            >
              {hashtags.map((businessKeyword) => (
                <Chip key={businessKeyword} 
                  label={businessKeyword} 
                  variant="outlined"
                  sx={{
                    '& .MuiChip-deleteIcon': {
                      color: "#93CCFF",
                    },
                  }}
                  style={{
                    borderColor: "#93CCFF",
                    borderWidth: 2,
                  }}
                  onDelete={ (e) => handleDelete(e, businessKeyword)} />
              ))}
            </Stack>
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
                mt: showChip ? 1 : 0
              }}
            >
              Generate
            </Button>
          </ListItem>
        </List>
      </Box>
    </div>
  );
}
