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
} from "@mui/material";
import axios from "axios";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";

import pdfDownload from "./ConvertIntoPDF/convertPDF";

const AdminTable = () => {
  const myState = useSelector(state => state.day);

  const [Data, SetData] = useState([]);
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

  return (
    <div style={{ margin: "10px" }}>
      <Button
        variant="contained"
        component="span"
        sx={{ float: "right", margin: 1 }}
        onClick={pdfDownload}
      >
        Download
      </Button>
      <Paper sx={{ width: "100%", overflow: "hidden", float: "right" }}>
        <TableContainer component={Paper}>
          <Table stickyHeader aria-label="sticky header table" id="issue-table">
            <TableHead>
              <TableRow>
                <TableCell align="right">Order ID</TableCell>
                <TableCell align="right">Issue ID</TableCell>
                <TableCell align="right">Email</TableCell>
                <TableCell align="right">Location</TableCell>
                <TableCell align="right">Date</TableCell>
                <TableCell align="right">Issue</TableCell>
                <TableCell align="right">Status</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {Data.map(row => (
                <TableRow key={row.issueId}>
                  <TableCell align="right">
                    <Link href={`/orders/${row.orderId}`} target="_blank">
                      {row.orderId}
                    </Link>
                  </TableCell>
                  <TableCell align="right">{row.issueId}</TableCell>
                  <TableCell align="right">{row.orderEmail}</TableCell>
                  <TableCell align="right">{row.country}</TableCell>
                  <TableCell align="right">{row.issueDate}</TableCell>
                  <TableCell align="right">{row.errorName}</TableCell>
                  <TableCell
                    align="right"
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
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </div>
  );
};

export default AdminTable;
