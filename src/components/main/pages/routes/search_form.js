import React from 'react';
import { Select, DatePicker, Input, Form, Button } from 'antd';
import moment from 'moment';

const RoutesSearchForm = ({onFinish}) => {
  return (
    <Form layout='inline' onFinish={onFinish}>
      <Form.Item label='Origen / Destino' name='origin'>
        <Select defaultValue="stg">
          <Select.Option value="stg">Santiago / Peor es Nada</Select.Option>
          <Select.Option value="psn">Peor es Nada / Santiago</Select.Option>
        </Select>
      </Form.Item>
      <Form.Item label='Fecha' name='date'>
        <DatePicker defaultValue={moment()} />
      </Form.Item>
      <Form.Item label='Patente (opcional)' name='patent'>
        <Input placeholder='ABCD12' />
      </Form.Item>
      <Form.Item>
        <Button type='primary' htmlType='submit'>Buscar</Button>
      </Form.Item>
    </Form>
  );
};

export default RoutesSearchForm