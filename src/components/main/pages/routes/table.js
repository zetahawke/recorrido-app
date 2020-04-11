import React from 'react';
import { Table, Row, Col, Card } from 'antd';
import { Link } from "react-router-dom";

const { Column } = Table;
const routesTableProps = {
  scroll: { x: '100%' },
  showHeader: true
}

const RoutesTable = ({results}) => {
  return (
    <>
      <Row gutter={24}>
        <Col>
          <Card title={'Rutas encontradas'}>
            <Row gutter={24}>
              <Table {...routesTableProps} dataSource={results} rowKey={record => record.id}>
                <Column
                  title='Patente del bus'
                  dataIndex='patent'
                  render={
                    value => {
                      return value;
                    }
                  }
                />
                <Column
                  title='Hora de salida'
                  dataIndex='out'
                  render={
                    value => {
                      return value
                    }
                  }
                />
                <Column
                  title='Hora de llegada'
                  dataIndex='arrive'
                  render={
                    value => {
                      return value
                    }
                  }
                />
                <Column
                  title='Estado del viaje'
                  dataIndex='status'
                  render={
                    value => {
                      return value
                    }
                  }
                />
                <Column
                  title=''
                  dataIndex='id'
                  render={
                    value => {
                      return <a href={`/road_routes/${value}`}>Details</a>
                    }
                  }
                />
              </Table>
            </Row>
          </Card>
        </Col>
      </Row>
    </>
  );
}

export default RoutesTable