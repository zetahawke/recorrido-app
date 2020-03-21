import React from 'react';
import { Layout } from 'antd';
import Icon from '@ant-design/icons';
const { Header } = Layout;

const MainHeader = (props) => {
  return (
    <Header className='main-header'>
      <Icon
        className="trigger"
        type={props.collapsed ? "menu-unfold" : "menu-fold"}
        style={{ cursor: "pointer" }}
        onClick={props.toggle}
      />
    </Header>
  );
}

export default MainHeader