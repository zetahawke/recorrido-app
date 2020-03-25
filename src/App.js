import React from 'react';
import './App.css';
import { BrowserRouter } from "react-router-dom";
import AppRouter from './components/main/app_router';

class RecorridoApp extends React.PureComponent {
  render () {
    return (
      <BrowserRouter>      
        <AppRouter />
      </BrowserRouter>
    );
  }
}

export default RecorridoApp;
