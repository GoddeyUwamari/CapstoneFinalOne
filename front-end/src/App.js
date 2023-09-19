import React from "react";
import { Route, Switch } from "react-router-dom";
import Layout from "./layout/Layout";
import Frontpage from "./layout/Frontpage";
import AdminLayout from "./layout/AdminLayout";
import "./style/Mediaqueries.css"
function App() {
  return (
    <Switch>
      <Route path="/admin">
        <AdminLayout />
      </Route>
      <Route path="/staff">
        <Layout />
      </Route>
      <Route path="/">
        <Frontpage />
      </Route>
    </Switch>
  );
}

export default App;
