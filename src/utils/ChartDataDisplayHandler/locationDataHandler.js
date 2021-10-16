const locationDataHandler = data => {
  const result = [];
  result.push(["Country", "Email", "Zip"]);

  data.forEach(element => {
    result.push([element.location, element.emailErrors, element.zipErrors]);
  });
  return result;
};

export default locationDataHandler;
