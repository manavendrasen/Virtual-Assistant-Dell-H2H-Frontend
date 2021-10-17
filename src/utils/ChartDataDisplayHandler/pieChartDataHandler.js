const pieChartDataHandler = data => {
  const result = [];
  result.push(
    ["Issues", "Total"],
    ["Email", data.totalEmailErrors],
    ["Zip", data.totalzipErrors],
    ["Fraud Email", data.totalfraudMails]
  );

  return result;
};

export default pieChartDataHandler;
