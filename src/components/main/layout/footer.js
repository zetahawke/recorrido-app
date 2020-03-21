import React from 'react';
import { Layout, Button } from 'antd';

const { Footer } = Layout;

const MainFooter = () => {
  return (
    <Footer style={{ textAlign: 'center' }}>
      Recorrido App ©2020 Created by
      <Button type={'link'} href='https://github.com/zetahawke' target={'_blank'}>
        @zetahawke
      </Button>  
    </Footer>
  )
};

export default MainFooter