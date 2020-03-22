import React from 'react';
import { BrowserRouter as Switch, Route } from "react-router-dom";
// import * as Pages from '@/components/pages';
import Dashboard from './pages/dashboard'
import RoadRoutes from './pages/road_routes'


const Routes = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Dashboard />
      </Route>
      <Route path="/road_routes">
        <RoadRoutes />
      </Route>
    </Switch>
  );
}

export default Routes