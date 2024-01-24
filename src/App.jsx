import React from 'react';
import Loading from './components/Loading';
import Error from './components/Error';
import Data from './components/Data';
import './App.css';


function App() {
  return (
    <main className='main'>
      <Data url={`${process.env.REACT_APP_API_URL}/data`} />
      <Error url={`${process.env.REACT_APP_API_URL}/error`} />
      <Loading url={`${process.env.REACT_APP_API_URL}/loading`} />
    </main>
  );
};

export default App;
