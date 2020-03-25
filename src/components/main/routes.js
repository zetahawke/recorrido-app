import React from 'react';
import { BrowserRouter as Route, Switch } from "react-router-dom";
// import * as Pages from '@/components/pages';
import Dashboard from './pages/dashboard'
import RoadRoutes from './pages/road_routes'


export const Routes = (
  <Switch>
    <Route exact path="/">
      <Dashboard />
    </Route>
    <Route exact path="/road_routes">
      <RoadRoutes />
    </Route>
  </Switch>
);