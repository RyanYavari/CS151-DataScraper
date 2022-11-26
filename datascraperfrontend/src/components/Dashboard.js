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

export default function Dashboard() {
  const location = useLocation();
  // console.log(location);

  const user = {
    firstName: location.state.firstName,
    lastName: location.state.lastName,
    email: location.state.email,
    businesses: location.state.businesses
  };

  console.log(user);

  const [newBusinessForm, showNewBusinessForm] = useState(false);

  if (newBusinessForm == true) {
    return (
      <div>
        <Sidebar user={user} showNewBusinessForm={showNewBusinessForm} />
        <Form user={user} />
      </div>
    );
  }

  return (
    <div>
      <Sidebar user={user} showNewBusinessForm={showNewBusinessForm} />
    </div>
  );
}
