import background from "./media/background1.jpg";
import Box from "@mui/material/Box";
import { useState } from "react";
import * as React from "react";
import List, { listClasses } from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import { Chip } from "@mui/material";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import { Button, Hidden } from "@mui/material";

const columns = [
  { id: "name", label: "Twitter Handle", minWidth: 170 },
  { id: "relatedTweet", label: "Related Tweet", minWidth: 600 },
];

function createData(name, relatedTweet) {
  return { name, relatedTweet };
}

export default function HandlesView({ user, businesses, setBusinesses, businessIdx, setBusinessIdx }) {
  const windowWidth = window.innerWidth;
  const hashtags = businesses[businessIdx].hashtags;
  const keywords = businesses[businessIdx].keywords;

  function deleteBusiness() {
    fetch("http://localhost:8080/removeBusiness?businessIdx=" + businessIdx)
      .then((response) => response.text())
      .then((result) => {
        console.log(JSON.parse(result).businesses);
        setBusinesses(JSON.parse(result).businesses);
        if (JSON.parse(result).businesses.length == 0) {
          setBusinessIdx(0);
        } else {
          setBusinessIdx(JSON.parse(result).businesses.length - 1);
        }
      });
  }

  //   const rows = businesses[businessIdx].handles;
  const rows = [
    createData("India", "IN"),
    createData("China", "CN"),
    createData("Italy", "IT"),
    createData("United States", "US", 327167434, 9833520),
    createData("Canada", "CA", 37602103, 9984670),
    createData("Australia", "AU", 25475400, 7692024),
    createData("Germany", "DE", 83019200, 357578),
    createData("Ireland", "IE", 4857000, 70273),
    createData("Mexico", "MX", 126577691, 1972550),
    createData("Japan", "JP", 126317000, 377973),
    createData("France", "FR", 67022000, 640679),
    createData("United Kingdom", "GB", 67545757, 242495),
    createData("Russia", "RU", 146793744, 17098246),
    createData("Nigeria", "NG", 200962417, 923768),
    createData("Brazil", "BR", 210147125, 8515767),
  ];

  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Box
      component="form"
      sx={{
        width: { windowWidth } - 280,
        height: "100vh",
        zIndex: 100,
        pl: 35,
        overflow: "hidden",
        //   mx: "auto",
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
      <List width="{ windowWidth } - 280">
        <ListItem
          sx={{
            color: "#fcfcfc",
            textAlign: "left",
            fontSize: "6rem",
            fontWeight: "600",
          }}
        >
          {businesses[businessIdx].name}
        </ListItem>
        <ListItem>
          <div style={{width: 1000}}>
            {keywords.map((businessKeyword) => (
              <Chip
                key={businessKeyword}
                label={businessKeyword}
                variant="outlined"
                sx={{
                  color: "#FFFFFF",
                  fontSize: "1rem",
                  fontWeight: "350",
                }}
                style={{
                  borderColor: "#f5a893",
                  borderWidth: 2.25,
                  textDecoration: "bold",
                }}
              />
            ))}
            {hashtags.map((businessKeyword) => (
              <Chip
                key={businessKeyword}
                label={businessKeyword}
                variant="outlined"
                sx={{
                  color: "#FFFFFF",
                  fontSize: "1rem",
                  fontWeight: "350",
                }}
                style={{
                  borderColor: "#93CCFF",
                  borderWidth: 2.25,
                  textDecoration: "bold",
                }}
              />
            ))}
            <div style={{ float: "right" }}>
              <Button
                variant="outlined"
                onClick={deleteBusiness}
                sx={{
                  mx: "auto",
                  width: 105,
                  color: "#fcfcfc",
                  borderColor: "#fcfcfc",
                }}
              >
                Delete
              </Button>
            </div>
          </div>
        </ListItem>
        <ListItem>
          <Paper
            sx={{
              width: "100%",
              overflow: "hidden",
              backgroundColor: "#fcfcfc",
            }}
          >
            <TableContainer sx={{ maxHeight: 400 }}>
              <Table stickyHeader aria-label="sticky table">
                <TableHead>
                  <TableRow sx={{ backgroundColor: "#fcfcfc" }}>
                    {columns.map((column) => (
                      <TableCell
                        key={column.id}
                        align={column.align}
                        style={{ minWidth: column.minWidth }}
                      >
                        {column.label}
                      </TableCell>
                    ))}
                  </TableRow>
                </TableHead>
                <TableBody>
                  {rows
                    .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                    .map((row) => {
                      return (
                        <TableRow
                          hover
                          role="checkbox"
                          tabIndex={-1}
                          key={row.code}
                        >
                          {columns.map((column) => {
                            const value = row[column.id];
                            return (
                              <TableCell key={column.id} align={column.align}>
                                {column.format && typeof value === "number"
                                  ? column.format(value)
                                  : value}
                              </TableCell>
                            );
                          })}
                        </TableRow>
                      );
                    })}
                </TableBody>
              </Table>
            </TableContainer>
            <TablePagination
              rowsPerPageOptions={[10, 25, 100]}
              component="div"
              count={rows.length}
              rowsPerPage={rowsPerPage}
              page={page}
              onPageChange={handleChangePage}
              onRowsPerPageChange={handleChangeRowsPerPage}
            />
          </Paper>
        </ListItem>
      </List>
    </Box>
  );
}
