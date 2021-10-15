const pieChartDataHandler = chart => {
  const issue = chart[0].map(e => e);
  issue.shift();
  const result = [];
  result.push(["Issues", "Total"]);
  issue.forEach(element => {
    const ans = [element];
    const index = issue.indexOf(element) + 1;
    let sum = 0;
    // console.log(element);
    for (let i = 1; i < chart.length; i += 1) {
      // console.log(chart[i][index]);
      sum += chart[i][index];
    }

    ans.push(sum);

    result.push(ans);
  });
  return result;
};

export default pieChartDataHandler;
