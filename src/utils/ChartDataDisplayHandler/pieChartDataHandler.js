const pieChartDataHandler = data => {
  const result = [];
  result.push(
    ["Issues", "Total"],
    ["Email", data.totalEmailErrors * 10],
    ["Zip", data.totalzipErrors * 10],
    ["Fraud Email", data.totalfraudMails * 10]
  );

  return result;
};

export default pieChartDataHandler;
