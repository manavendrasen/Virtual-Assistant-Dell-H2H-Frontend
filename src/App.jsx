import React from "react";
import { ThemeProvider } from "@mui/material/styles";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// Material UI Theme
import theme from "./mui.theme";

// Pages
import { AdminDashboard, HomePage } from "./Pages";

const App = () => (
  <>
    <ThemeProvider theme={theme}>
      <Router>
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route exact path="/admin">
            <AdminDashboard />
          </Route>
        </Switch>
      </Router>
    </ThemeProvider>
  </>
);

export default App;
