const pieChartDataHandler = data => {
  const result = [];
  result.push(
    ["Issues", "Total"],
    ["Email", data.totalEmailErrors],
    ["Zip", data.totalzipErrors]
  );

  return result;
};

export default pieChartDataHandler;
