import XLSX from "xlsx";

const downloadExcel = data => {
  const workSheet = XLSX.utils.json_to_sheet(data);
  const workBook = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(workBook, workSheet, "Issue");

  const buf = XLSX.write(workBook, { bookType: "xlsx", type: "buffer" });

  XLSX.write(workBook, { bookType: "xlsx", type: "binary" });

  XLSX.writeFile(workBook, "IssuesData.xlsx");
};

export default downloadExcel;
