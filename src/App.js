import React from 'react';
import './App.css';
import MainRouter from './components/main/app_router';

class RecorridoApp extends React.PureComponent {
  render () {
    return (
      <>      
        <MainRouter />
      </>
    );
  }
}

export default RecorridoApp;
