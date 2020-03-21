import React, { Component } from 'react';
import './App.css';
import MainRouter from './components/main/app_router';

class RecorridoApp extends Component {
  state = {
    collapsed: false
  };

  onCollapse = collapsed => {
    this.setState({ collapsed });
  };
  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed
    });
  };

  render () {
    return (
      <>      
        <MainRouter props={ { onCollapse: this.onCollapse, toggle: this.toggle, state: this.state } }></MainRouter>
      </>
    );
  }
}

export default RecorridoApp;
