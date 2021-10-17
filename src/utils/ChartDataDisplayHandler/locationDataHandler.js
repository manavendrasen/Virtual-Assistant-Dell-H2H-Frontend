const locationDataHandler = data => {
  const result = [];
  result.push(["Country", "Total Issues"]);

  data.forEach(element => {
    result.push([
      element.location,
      element.emailErrors + element.fraudList + element.zipErrors,
    ]);
  });
  return result;
};

export default locationDataHandler;
