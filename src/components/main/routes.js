import React from 'react';
import { BrowserRouter as Route } from "react-router-dom";
// import * as Pages from '@/components/pages';
import Dashboard from './pages/dashboard'
import RoadRoutes from './pages/road_routes'


const Routes = () => {
  return (
    <>
      <Route exact path="/">
        <Dashboard />
      </Route>
      <Route path="/road_routes">
        <RoadRoutes />
      </Route>
    </>
  );
}

export default Routes