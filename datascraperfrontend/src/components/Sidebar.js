import { Users as UsersIcon } from "./icons/users";
import Box from "@mui/material/Box";
import List, { listClasses } from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import { Drawer, MenuList } from "@mui/material";
import { Button, Hidden } from "@mui/material";
import { ChartBar as ChartBarIcon } from "./icons/chart-bar";
import Accordion from "@mui/material/Accordion";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import LogoutIcon from "@mui/icons-material/Logout";
import MenuItem from "@mui/material/MenuItem";
import { Link } from "react-router-dom";
import AddIcon from "@mui/icons-material/Add";

export default function Sidebar({ user, businesses, showNewBusinessForm, setBusinessIdx }) {

  const items = [
    {
      href: "/",
      icon: (
        <UsersIcon
          fontSize="small"
          sx={{
            mr: 1,
            fontSize: "1.2rem",
          }}
        />
      ),
      title: "Businesses",
    },
  ];

  return (
    <Drawer
      anchor="left"
      BackdropProps={{ invisible: true }}
      PaperProps={{
        sx: {
          backgroundColor: "#ffffff",
          color: "#626262",
          width: 280,
          fontSize: "1.875rem",
          fontWeight: "500",
          overflow: "hidden",
        },
      }}
      variant="permanent"
    >
      <List>
        <ListItem>
          <Accordion
            sx={{
              width: "100%",
              height: "100%",
              mx: "auto",
              backgroundColor: "#fcfcfc"
            }}
          >
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Box
                sx={{
                  width: "100%",
                  height: "100%",
                  mx: "auto",
                  display: "flex",
                  justifyContent: "center",
                  backgroundColor: "#fcfcfc",
                  borderRadius: 2,
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
            </AccordionSummary>
            <AccordionDetails>
              <MenuList>
                <Link
                  to="/"
                  style={{
                    textDecoration: "none",
                    color: "#626262",
                  }}
                >
                  <MenuItem
                    sx={{
                      fontSize: "1rem",
                      fontWeight: "500",
                    }}
                  >
                    <LogoutIcon
                      sx={{
                        fontSize: "1rem",
                        mr: 1,
                      }}
                    />{" "}
                    Logout
                  </MenuItem>
                </Link>
              </MenuList>
            </AccordionDetails>
          </Accordion>
        </ListItem>
        <ListItem
          sx={{
            fontSize: "1.1rem",
            fontWeight: "500",
            ml: 2.5,
            pb: 0,
          }}
        >
          {items[0].icon}
          {items[0].title}
          <List></List>
        </ListItem>
        <ListItem>
          <MenuList
            sx={{
              width: "100%",
              fontSize: "0.5rem",
              fontWeight: "50",
            }}
          >
            {businesses.map((business) => (
              <MenuItem
                sx={{
                  pl: 6,
                }}
                onClick={() => {
                  showNewBusinessForm(false);
                  const i = businesses.indexOf(business);
                  console.log(i);
                  setBusinessIdx(i);
                }}
              >
                {business.name}
              </MenuItem>
            ))}
            <MenuItem
              onClick={() => {
                showNewBusinessForm(true);
              }}
              sx={{
                mt: 1,
                justifyContent: "center",
                pl: 0,
              }}
            >
              <AddIcon
                sx={{
                  mr: 1,
                  color: "#93CCFF",
                }}
              />
              Add a business
            </MenuItem>
          </MenuList>
        </ListItem>
      </List>
    </Drawer>
  );
}
