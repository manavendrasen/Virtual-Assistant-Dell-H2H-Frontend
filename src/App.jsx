import React from "react";
import { ThemeProvider } from "@mui/material/styles";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// Material UI Theme
import theme from "./mui.theme";
import ReduxProvider from "./store";
// Pages
import { AdminDashboard, OrderDetails } from "./Pages";

const App = () => (
  <ReduxProvider>
    <ThemeProvider theme={theme}>
      <Router>
        <Switch>
          <Route exact path="/" component={AdminDashboard} />
          <Route path="/orders/:orderId" component={OrderDetails} />
        </Switch>
      </Router>
    </ThemeProvider>
  </ReduxProvider>
);

export default App;
