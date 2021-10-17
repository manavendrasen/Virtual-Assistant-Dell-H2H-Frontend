import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
  Link,
  Box,
  Typography,
  CircularProgress,
  Checkbox,
} from "@mui/material";
import FilterListIcon from "@mui/icons-material/FilterList";
import DownloadIcon from "@mui/icons-material/Download";
import axios from "axios";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";

import pdfDownload from "./ConvertIntoPDF/convertPDF";

const AdminTable = () => {
  const myState = useSelector(state => state.day);

  const [Data, SetData] = useState([]);
  const [checked1, setChecked1] = useState(true);
  const [checked2, setChecked2] = useState(true);
  useEffect(() => {
    const fetch = async () => {
      try {
        const { data } = await axios.get(myState[3]);
        SetData(data);
      } catch (err) {
        console.error(err);
      }
    };
    fetch();
  }, [myState]);

  const handleChange1 = event => {
    // if (!checked2) setChecked2(event.target.checked);
    setChecked1(event.target.checked);
  };

  const handleChange2 = event => {
    // if (!checked1) setChecked1(event.target.checked);
    setChecked2(event.target.checked);
  };

  const handleCheckedList = (check1, check2, issue) => {
    if (check1 && issue) return false;
    if (check2 && !issue) return false;
    return true;
  };

  return (
    <Box style={{ margin: "2em" }}>
      <Typography>Analytics Table</Typography>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Box>
          <Typography>
            <FilterListIcon /> Filter By
          </Typography>
          <Box style={{ display: "flex", alignItems: "center" }}>
            <Checkbox
              checked={checked1}
              onChange={handleChange1}
              inputProps={{ "aria-label": "controlled" }}
              name="Resolved"
            />
            <Typography>Resolved</Typography>
            <Checkbox
              checked={checked2}
              onChange={handleChange2}
              inputProps={{ "aria-label": "controlled" }}
              name="Not Resolved"
            />
            <Typography>Not Resolved</Typography>
          </Box>
        </Box>
        <Button
          variant="contained"
          component="span"
          sx={{ float: "right", margin: 1 }}
          onClick={pdfDownload}
          startIcon={<DownloadIcon />}
        >
          Download
        </Button>
      </Box>

      <Paper sx={{ width: "100%", overflow: "hidden", float: "right" }}>
        <TableContainer component={Paper}>
          <Table stickyHeader aria-label="sticky header table" id="issue-table">
            <TableHead>
              <TableRow>
                <TableCell align="center" sx={{ bgcolor: "#F5F5F5" }}>
                  Order ID
                </TableCell>
                <TableCell align="center" sx={{ bgcolor: "#F5F5F5" }}>
                  Issue ID
                </TableCell>
                <TableCell align="center" sx={{ bgcolor: "#F5F5F5" }}>
                  Email
                </TableCell>
                <TableCell align="center" sx={{ bgcolor: "#F5F5F5" }}>
                  Location
                </TableCell>
                <TableCell align="center" sx={{ bgcolor: "#F5F5F5" }}>
                  Date
                </TableCell>
                <TableCell align="center" sx={{ bgcolor: "#F5F5F5" }}>
                  Issue
                </TableCell>
                <TableCell align="center" sx={{ bgcolor: "#F5F5F5" }}>
                  Status
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {Data ? (
                Data.map(row => (
                  <TableRow
                    key={row.issueId}
                    sx={
                      handleCheckedList(checked1, checked2, row.isResolved)
                        ? { display: "none" }
                        : ""
                    }
                  >
                    <TableCell align="center">
                      <Link href={`/orders/${row.orderId}`} target="_blank">
                        {row.orderId}
                      </Link>
                    </TableCell>
                    <TableCell align="center">{row.issueId}</TableCell>
                    <TableCell align="center">{row.orderEmail}</TableCell>
                    <TableCell align="center">{row.country}</TableCell>
                    <TableCell align="center">{row.issueDate}</TableCell>
                    <TableCell align="center">{row.errorName}</TableCell>
                    <TableCell
                      align="center"
                      sx={
                        row.isResolved
                          ? { bgcolor: "#4AAF05", textAlign: "center" }
                          : { bgcolor: "#FB8832", textAlign: "center" }
                      }
                    >
                      {row.isResolved ? (
                        <h1>
                          <b>Resolved</b>
                        </h1>
                      ) : (
                        <h1>
                          <b>Not Resolved</b>
                        </h1>
                      )}
                    </TableCell>
                  </TableRow>
                ))
              ) : (
                <Box
                  sx={{
                    display: "flex",
                    width: 600,
                    height: 500,
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <CircularProgress />
                </Box>
              )}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </Box>
  );
};

export default AdminTable;
