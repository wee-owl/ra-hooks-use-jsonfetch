import React from 'react';
import useJsonFetch from '../hooks/useJsonFetch';


function Loading({ url }) {
  const [{ loading }] = useJsonFetch(url);

  return (
    <div className='loading'>
      <span>Индикатор загрузки на 5 сек.</span>
      {loading ? <span className='loader'></span> : ''}
    </div>
  );
};

export default Loading;
