// Assuming that we know that there are n number of errors else we need to have a count + string form of each Issue also assuming we have everydays data with us

// const graphDataHandler = Data => {
//   // This puts data in single date
//   const groups = Data.reduce((group, issue) => {
//     if (!group[issue.date]) {
//       group[issue.date] = [];
//     }
//     group[issue.date].push(issue);
//     return group;
//   }, []);

//   const groupArrays = Object.keys(groups).map(date => ({
//     date,
//     issues: groups[date],
//   }));

//   const result = [];
//   result.push(["Date", "Email", "Zip"]);

//   groupArrays.forEach(ele => {
//     let email = 0;
//     let zip = 0;
//     for (let i = 0; i < ele.issues.length; i += 1) {
//       if (ele.issues[i].issueIn === "Email") email += 1;
//       else zip += 1;
//     }
//     result.push([ele.date, email, zip]);
//   });

//   return result;
// };

const graphDataHandler = data => {
  const result = [];
  result.push(["Date", "Email", "Zip"]);
  data.forEach(element => {
    const date = element.issueDate ? element.issueDate : element.month;
    result.push([element.issueDate, element.emailErrors, element.zipErrors]);
  });
  return result;
};

export default graphDataHandler;
