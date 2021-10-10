import JSpdf from "jspdf";
import autoTable from "jspdf-autotable";

const pdfDownload = () => {
  const doc = new JSpdf();
  doc.text("Issue Details", 20, 10);
  doc.addImage("./dell.jpeg", "JPEG", 10, 30, 150, 76);
  autoTable(doc, { html: "#issue-table" });
  doc.save("Issue.pdf");
};

export default pdfDownload;
