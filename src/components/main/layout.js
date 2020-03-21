import React from 'react';
import MainSider from './layout/sider'
import MainContainer from './layout/container'
import MainFooter from './layout/footer'
import MainHeader from './layout/header';
import { Layout } from 'antd';

class MainLayout extends React.PureComponent {
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
      <Layout className='layout-100'>
        <MainSider onCollapse={ this.onCollapse } toggle={ this.toggle } collapsed={ this.state.collapsed } />
        <Layout>
          <MainHeader onCollapse={ this.onCollapse } toggle={ this.toggle } collapsed={ this.state.collapsed } />
          <MainContainer />
          <MainFooter />
        </Layout>
      </Layout>
    )
  }
};

export default MainLayout