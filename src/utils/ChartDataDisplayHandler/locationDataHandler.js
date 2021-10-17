const locationDataHandler = data => {
  const result = [];
  result.push(["Country", "Total Issues"]);

  data.forEach(element => {
    result.push([
      element.location,
      (element.emailErrors + element.fraudList + element.zipErrors) * 10,
    ]);
  });
  return result;
};

export default locationDataHandler;
