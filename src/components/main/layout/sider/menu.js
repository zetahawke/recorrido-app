import React from 'react';
import { Menu } from 'antd'
import Icon from '@ant-design/icons';
import { BrowserRouter as Link } from "react-router-dom";

const MainMenu = () => {
  return (
    <>
      <Menu theme="dark" defaultSelectedKeys={["1"]} mode="inline">
        <Menu.Item key="1">
          <Icon type="desktop" />
          <span>Deshboard</span>
          <Link to="/" />
        </Menu.Item>
        <Menu.Item key="2">
          <Icon type="ProfileOutlined" />
          <span>RoadRoutes</span>
          <Link to="/road_routes" />
        </Menu.Item>
      </Menu>
    </>
  );
}

export default MainMenu