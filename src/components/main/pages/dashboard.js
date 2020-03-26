import React, { useState, useEffect } from 'react';
import { Select, DatePicker, Input, Form, Button } from 'antd';
import RoutesTable from './routes/table';
import moment from 'moment';

const Dashboard = () => {
  const [results, setResults] = useState([]);

  const onFinish = values => {
    debugger;
    const fetchParams = {
      destiny: values.destiny,
      date: values.date.format('L'),
      patent: values.patent,
    }

    fetchResults(fetchParams);
  };

  const fetchResults = async (fetchParams) => {
    fetch('http://localhost:3001/api/quotations', {
      method: 'POST',
      body: JSON.stringify(fetchParams),
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(res => res.json())
      .then((data) => {
        setResults(data)
      })
      .catch(console.log);
  };

  useEffect(() => {
  }, [
    results
  ]);


  return (
    <div>
      <h1>
        Busca recorridos
      </h1>
      <br />
      <Form layout='inline' onFinish={onFinish}>
        <Form.Item label='Destino' name='destiny'>
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

      <br />
      <hr />
      <br />

      {results ? (
        <RoutesTable results={results} />
      ) : null}
    </div>
  );
}

export default Dashboard