const graphDataHandler = data => {
  const result = [];
  result.push(["Date", "Email", "Zip", "Fraud \n Email"]);
  data.forEach(element => {
    let date = element.issueDate ? element.issueDate : element.month;
    if (date === element.month) {
      switch (element.month) {
        case 1:
          date = "January";
          break;
        case 2:
          date = "February";
          break;
        case 3:
          date = "March";
          break;
        case 4:
          date = "April";
          break;
        case 5:
          date = "May";
          break;
        case 6:
          date = "June";
          break;
        case 7:
          date = "July";
          break;
        case 8:
          date = "August";
          break;
        case 9:
          date = "September";
          break;
        case 10:
          date = "October";
          break;
        case 11:
          date = "November";
          break;
        case 12:
          date = "December";
          break;
        default:
          data = "Incorrect";
      }
    }
    result.push([
      date,
      element.emailErrors,
      element.zipErrors,
      element.fraudList,
    ]);
  });
  return result;
};

export default graphDataHandler;
