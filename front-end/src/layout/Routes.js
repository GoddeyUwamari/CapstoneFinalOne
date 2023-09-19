// Routes.js
import React from "react";
import { Route, Switch } from "react-router-dom";
import UserManagement from "../components/UserMangement";
import Reservation from "../pages/Reservation";
import Rooms from "../pages/Rooms";
import AdminLayout from "./AdminLayout";
import NotFound from "./NotFound";

function Routes() {
  return (
    <Switch>
      <Route exact path="/staff">
        <Reservation />
      </Route>
      <Route path="/staff/rooms">
        <Rooms />
      </Route>
      <Route path="/admin">
        <AdminLayout />
      </Route>
      <Route path="/staff/user-management">
        <UserManagement />
      </Route>

      <Route>
        <NotFound />
      </Route>
    </Switch>
  );
}

export default Routes;
