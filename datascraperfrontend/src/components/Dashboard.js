import * as React from "react";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Routes,
  useLocation,
} from "react-router-dom";
import {
  Box,
  Button,
  Divider,
  Drawer,
  Typography,
  useMediaQuery,
} from "@mui/material";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Sidebar from "./Sidebar";
import Form from "./Form";
import { useState } from "react";
import HandlesView from "./HandlesView";
import Lottie from "lottie-react";
import dataloading from "./media/dataloading.json";

export default function Dashboard() {
  const location = useLocation();
  // console.log(location);

  const user = {
    firstName: location.state.firstName,
    lastName: location.state.lastName,
    email: location.state.email,
    businesses: location.state.businesses,
  };
  const parseBusiness = JSON.stringify(user.businesses);

  // console.log(user);

  const [newBusinessForm, showNewBusinessForm] = useState(false);
  const [businesses, setBusinesses] = useState(JSON.parse(parseBusiness));
  const [businessIdx, setBusinessIdx] = useState(0);
  const [needLoadingScreen, setNeedLoadingScreen] = useState(false);
  const windowWidth = window.innerWidth;

  if (needLoadingScreen) {
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
        }}
        noValidate
        autoComplete="off"
      >
        <Lottie
          animationData={dataloading} 
          loop={true} 
        />
      </Box>
        <Sidebar
          user={user}
          businesses={businesses}
          showNewBusinessForm={showNewBusinessForm}
          setBusinessIdx={setBusinessIdx}
        />
      </div>
    );
  }
  
  if (newBusinessForm == true || businesses.length == 0) {
    return (
      <div>
        <Sidebar
          user={user}
          businesses={businesses}
          showNewBusinessForm={showNewBusinessForm}
          setBusinessIdx={setBusinessIdx}
        />
        <Form
          user={user}
          setBusinesses={setBusinesses}
          showNewBusinessForm={showNewBusinessForm}
          setBusinessIdx={setBusinessIdx}
          setNeedLoadingScreen={setNeedLoadingScreen}
        />
      </div>
    );
  }

  return (
    <div>
      <HandlesView
        user={user}
        businesses={businesses}
        setBusinesses={setBusinesses}
        businessIdx={businessIdx}
        setBusinessIdx={setBusinessIdx}
      />
      <Sidebar
        user={user}
        businesses={businesses}
        showNewBusinessForm={showNewBusinessForm}
        setBusinessIdx={setBusinessIdx}
      />
    </div>
  );
}
