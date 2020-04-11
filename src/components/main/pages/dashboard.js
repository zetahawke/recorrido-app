import React, { useState, useEffect } from 'react';
import RoutesTable from './routes/table';
import RoutesSearchForm from './routes/search_form';

const Dashboard = () => {
  const [results, setResults] = useState([]);

  const objToQueryString = (obj) => {
    const keyValuePairs = [];
    for (const key in obj) {
      if (obj[key]) {
        keyValuePairs.push(encodeURIComponent(key) + '=' + encodeURIComponent(obj[key]));
      }
    }
    return keyValuePairs.join('&');
  }

  const onFinish = values => {
    const fetchParams = {
      origin: values.origin,
      date: values.date.format('DD/MM/YYYY'),
      patent: values.patent || null,
    }

    fetchResults(objToQueryString(fetchParams));
  };

  const fetchResults = async (fetchParams) => {
    fetch(`http://localhost:3001/v1/road_routes.json?${fetchParams}`, {
      method: 'GET',
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
        <RoutesTable results={results.road_routes} />
      ) : null}
    </div>
  );
}

export default Dashboard