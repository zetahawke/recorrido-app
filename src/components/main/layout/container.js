import React from 'react';
import { Layout } from 'antd';
import Routes from '../routes';

const { Content } = Layout;

const MainContainer = () => {
  return (
    <Content className='site-content'>
      <Routes></Routes>
    </Content>
  )
};

export default MainContainer