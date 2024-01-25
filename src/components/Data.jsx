import React from 'react';
import useJsonFetch from '../hooks/useJsonFetch';


function Data({ url }) {
  const [{ data }] = useJsonFetch(url);

  return (
    <div className='data'>
      <p>Успешное получение данных. Status: {data.status}</p>
    </div>
  );
};

export default Data;
