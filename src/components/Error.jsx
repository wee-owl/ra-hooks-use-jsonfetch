import React from 'react';
import useJsonFetch from '../hooks/useJsonFetch';


function Error({ url }) {
  const { error } = useJsonFetch(url);

  return (
    <div className='error'>
      <p>Получение ошибки. Status: {error}</p>
    </div>
  );
};

export default Error;
