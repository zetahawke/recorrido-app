import React from 'react';
import MainSider from './layout/sider'
import MainContainer from './layout/container'
import MainFooter from './layout/footer'
import MainHeader from './layout/header';
import { Layout } from 'antd';

const MainLayout = (props) => {
  return (
    <Layout className='layout-100'>
      <MainSider></MainSider>
      <Layout>
        <MainHeader></MainHeader>
        <MainContainer></MainContainer>
        <MainFooter></MainFooter>
      </Layout>
    </Layout>
  )
};

export default MainLayout