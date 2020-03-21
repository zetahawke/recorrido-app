import React from 'react';
import { Layout } from 'antd';
import MainMenu from './sider/menu';

const { Sider } = Layout;

const MainSider = (props) => {
  return (
    <>
      <Sider
        collapsible
        collapsed={props.collapsed}
        onCollapse={props.onCollapse}
      >
        <div className="logo" />
        <MainMenu></MainMenu>
      </Sider>
    </>
  )
};

export default MainSider