import React from 'react';
import './App.css';
import { BrowserRouter as Router } from "react-router-dom";
import MainLayout from './components/main/layout';

class RecorridoApp extends React.Component {
  render () {
    return (
      <Router>
        <MainLayout />
      </Router>
      
    );
  }
}

export default RecorridoApp;
