import React, { useState, useEffect } from 'react';
import RoutesTable from './routes/table';
import RoutesSearchForm from './routes/search_form';

const Dashboard = () => {
  const [results, setResults] = useState([]);

  const onFinish = values => {
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
      <RoutesSearchForm onFinish={onFinish} />

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