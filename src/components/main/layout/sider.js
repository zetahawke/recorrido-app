import React from 'react';
import { Layout } from 'antd';
import MainMenu from './sider/menu';

const { Sider } = Layout;

const MainSider = ({collapsed, onCollapse}) => {
  return (
    <>
      <Sider
        collapsible
        collapsed={collapsed}
        onCollapse={onCollapse}
      >
        <div className="logo" />
        <MainMenu></MainMenu>
      </Sider>
    </>
  )
};

export default MainSider