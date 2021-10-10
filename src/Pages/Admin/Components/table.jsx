import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
} from "@mui/material";
import IssueData from "./mockdata.json";
import pdfDownload from "./ConvertIntoPDF/convertPDF";

const AdminTable = () => {
  const errorMessage = bool => {
    if (bool.email) return "Invalid email error";
    if (bool.zip) return "Invalid zip error";
    if (bool.Add) return "Issue in delivery from Warehouse";
    return "No issues";
  };
  return (
    <div>
      <Paper sx={{ width: "100%", overflow: "hidden", float: "right" }}>
        <TableContainer component={Paper} sx={{ height: 500 }}>
          <Table stickyHeader aria-label="sticky header table" id="issue-table">
            <TableHead>
              <TableRow>
                <TableCell align="right">Order ID</TableCell>
                <TableCell align="right">Product ID</TableCell>
                <TableCell align="right">Name</TableCell>
                <TableCell align="right">Email</TableCell>
                <TableCell align="right">Phone No.</TableCell>
                <TableCell align="right">Location</TableCell>
                <TableCell align="right">Date</TableCell>
                <TableCell align="right">Issue</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {IssueData.map(row => (
                <TableRow key={row.issueId}>
                  <TableCell align="right">{row.order.orderId}</TableCell>
                  <TableCell align="right">
                    {row.order.product.productId}
                  </TableCell>
                  <TableCell align="right">{row.order.userName}</TableCell>
                  <TableCell align="right">{row.order.userEmail}</TableCell>
                  <TableCell align="right">{row.order.userPhone}</TableCell>
                  <TableCell align="right">{row.order.address.city}</TableCell>
                  <TableCell align="right">{row.order.orderDate}</TableCell>
                  <TableCell align="right">
                    {errorMessage(row.issueIn)}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>

      <Button
        variant="contained"
        component="span"
        sx={{ float: "right", margin: 1 }}
        onClick={pdfDownload}
      >
        Download
      </Button>
    </div>
  );
};

export default AdminTable;
