import React from 'react';
import { Menu } from 'antd'
import { Link } from "react-router-dom";
import { ProfileOutlined, DesktopOutlined } from '@ant-design/icons';

const MainMenu = () => {
  return (
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
  );
}

export default MainMenu