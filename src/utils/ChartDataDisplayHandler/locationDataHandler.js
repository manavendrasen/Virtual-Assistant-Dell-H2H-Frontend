const locationDataHandler = Data => {
  const groups = Data.reduce((group, issue) => {
    if (!group[issue.location]) {
      group[issue.location] = [];
    }
    group[issue.location].push(issue);
    return group;
  }, []);

  const groupArrays = Object.keys(groups).map(location => ({
    location,
    issues: groups[location],
  }));

  const result = [];
  result.push(["Country", "Email", "Zip"]);

  groupArrays.forEach(ele => {
    let email = 0;
    let zip = 0;
    for (let i = 0; i < ele.issues.length; i += 1) {
      if (ele.issues[i].issueIn === "Email") email += 1;
      else zip += 1;
    }
    result.push([ele.location, email, zip]);
  });

  return result;
};

export default locationDataHandler;
