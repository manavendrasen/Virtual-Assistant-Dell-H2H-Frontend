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

import DownloadIcon from "@mui/icons-material/Download";
import axios from "axios";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import convertExcel from "./ConvertIntoPDF/convertExcel";
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
    <Box className="px-24 border-t-2 border-gray-300 py-8">
      <Typography variant="h5">Issue Records</Typography>
      <div className="flex justify-between py-4 items-center">
        <Box className="flex items-center">
          <Typography>Filter By: </Typography>
          <div className="flex items-center gap-4">
            <div className="flex gap-0 items-center ml-4">
              <Checkbox
                checked={checked1}
                onChange={handleChange1}
                inputProps={{ "aria-label": "controlled" }}
                name="Resolved"
              />
              <Typography>Resolved</Typography>
            </div>
            <div className="flex gap-0 items-center">
              <Checkbox
                checked={checked2}
                onChange={handleChange2}
                inputProps={{ "aria-label": "controlled" }}
                name="Not Resolved"
              />
              <Typography>Not Resolved</Typography>
            </div>
          </div>
        </Box>
        <Button
          variant="contained"
          component="span"
          onClick={pdfDownload}
          startIcon={<DownloadIcon />}
        >
          Download
        </Button>
        <Button
          variant="contained"
          component="span"
          onClick={() => convertExcel(Data)}
          startIcon={<DownloadIcon />}
        >
          Excel
        </Button>
      </div>

      <Paper
        sx={{
          width: "100%",
          overflow: "hidden",
          float: "right",
          marginBottom: "4rem",
        }}
      >
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
                  User Email
                </TableCell>
                <TableCell align="center" sx={{ bgcolor: "#F5F5F5" }}>
                  Supplier Location
                </TableCell>
                <TableCell align="center" sx={{ bgcolor: "#F5F5F5" }}>
                  Order Date
                </TableCell>
                <TableCell align="center" sx={{ bgcolor: "#F5F5F5" }}>
                  Issue
                </TableCell>
                <TableCell align="center" sx={{ bgcolor: "#F5F5F5" }}>
                  Issue Status
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
                          ? {
                              color: "#7AA809",
                              textAlign: "center",
                            }
                          : { color: "#E4424D", textAlign: "center" }
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
