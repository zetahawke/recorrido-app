import React from 'react';
import { Layout } from 'antd';
import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons';
const { Header } = Layout;

const MainHeader = ({toggle, collapsed}) => {
  return (
    <Header className='main-header'>
      {
        collapsed ?
          <MenuFoldOutlined onClick={toggle} /> :
          <MenuUnfoldOutlined onClick={toggle} />
      }
    </Header>
  );
}

export default MainHeader