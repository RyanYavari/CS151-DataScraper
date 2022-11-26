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

export default function Sidebar() {
  const businesses = [
    {
      name: "CodeAcademy",
    },
    {
        name: "Khan Academy"
    }
  ];
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
      open="true"
      PaperProps={{
        sx: {
          backgroundColor: "neutral.900",
          color: "#626262",
          width: 280,
          fontSize: "1.875rem",
          fontWeight: "500",
        },
      }}
      sx={{ zIndex: (theme) => theme.zIndex.appBar + 100 }}
      variant="temporary"
    >
      <List>
        <ListItem>
          <Accordion
            sx={{
              width: "100%",
              height: "100%",
              mx: "auto",
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
                  backgroundColor: "#FFFFFF",
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
            ml: 1
          }}
        >
          {items[0].icon}
          {items[0].title}
          <List>
            
          </List>
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
                    mb: 1,
                    ml: 1
                }}
              >{business.name}</MenuItem>
            ))}
          </MenuList>
        </ListItem>
      </List>
    </Drawer>
  );
}
