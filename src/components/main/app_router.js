import React from 'react';
import MainLayout from './layout';
import { BrowserRouter as Router } from "react-router-dom";

const AppRouter = () => {
  return (
    <Router>
      <MainLayout></MainLayout>
    </Router>
  );
}

export default AppRouter