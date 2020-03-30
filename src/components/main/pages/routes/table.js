import React from 'react';
import { Table, Row, Col, Card } from 'antd';

const { Column } = Table;
const routesTableProps = {
  scroll: { x: '100%' },
  // size: 'default',
  showHeader: true
}

const RoutesTable = ({results}) => {
  return (
    <>
      <Row gutter={24}>
        <Col>
          <Card title={'Rutas encontradas'}>
            <Row gutter={24}>
              <Table {...routesTableProps} dataSource={results}>
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
              </Table>
            </Row>
          </Card>
        </Col>
      </Row>
    </>
  );
}

export default RoutesTable