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

export default function Dashboard() {
  const location = useLocation();
  // console.log(location);

  const user = {
    firstName: location.state.firstName,
    lastName: location.state.lastName,
    email: location.state.email,
    handles: location.state.handles,
  };

  // console.log(user);

  return <Sidebar />;
}
