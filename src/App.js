import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import MainFooter from './components/main/layout/footer'
import MainHeader from './components/main/layout/header';
import { Layout, Menu } from "antd";
import { ProfileOutlined, DesktopOutlined } from '@ant-design/icons';
import Dashboard from './components/main/pages/dashboard'
import RoadRoutes from './components/main/pages/road_routes'

const { Content, Sider } = Layout;


class RecorridoApp extends React.PureComponent {
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
      <Router>
        <Layout className='layout-100'>
          <Sider
            collapsible
            collapsed={this.state.collapsed}
            onCollapse={this.onCollapse}
          >
            <div className="logo" />
            <Menu theme="dark" defaultSelectedKeys={["1"]} mode="inline">
              <Menu.Item key="1">
                <DesktopOutlined />
                <span>Deshboard</span>
                <Link to="/" />
              </Menu.Item>
              <Menu.Item key="2">
                <ProfileOutlined />
                <span>RoadRoutes</span>
                <Link to="/road_routes" />
              </Menu.Item>
            </Menu>
          </Sider>
          <Layout>
            <MainHeader onCollapse={ this.onCollapse } toggle={ this.toggle } collapsed={ this.state.collapsed } />
            <Content className='site-content'>
              <Switch>
                <Route exact path="/">
                  <Dashboard />
                </Route>
                <Route path="/road_routes">
                  <RoadRoutes />
                </Route>
              </Switch>
            </Content>
            <MainFooter />
          </Layout>
        </Layout>
      </Router>
    );
  }
}

export default RecorridoApp;
