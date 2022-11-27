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

export default function Dashboard() {
  const location = useLocation();
  // console.log(location);

  const user = {
    firstName: location.state.firstName,
    lastName: location.state.lastName,
    email: location.state.email,
    businesses: location.state.businesses
  };
  const parseBusiness = JSON.stringify(user.businesses);

  // console.log(user);

  const [newBusinessForm, showNewBusinessForm] = useState(false);
  const [businesses, setBusinesses] = useState(JSON.parse(parseBusiness));
  const [businessIdx, setBusinessIdx] = useState(0);

  if (newBusinessForm == true || businesses.length == 0) {
    return (
      <div>
        <Sidebar user={user} businesses={businesses} showNewBusinessForm={showNewBusinessForm} setBusinessIdx={setBusinessIdx} />
        <Form user={user} setBusinesses={setBusinesses} showNewBusinessForm={showNewBusinessForm} setBusinessIdx={setBusinessIdx}/>
      </div>
    );
  }

  console.log(businesses);
  return (
    <div>
      <HandlesView user={user} businesses={businesses} setBusinesses={setBusinesses} businessIdx={businessIdx} setBusinessIdx={setBusinessIdx} />
      <Sidebar user={user} businesses={businesses} showNewBusinessForm={showNewBusinessForm} setBusinessIdx={setBusinessIdx} />
    </div>
  );
}
