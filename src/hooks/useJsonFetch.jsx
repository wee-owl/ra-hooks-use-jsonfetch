import {useState, useEffect} from 'react';


function useJsonFetch(url, opts) {
  const [data, setData] = useState({});
  const [error, setError] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getResult = async () => {

      try {
        const response = await fetch(url);
        if (!response.ok) {
          setError(response.status, response.statusText);
        }
        const data = await response.json();
        setData(data);

      } catch(e) {
        setError(e.status, e.statusText);

      } finally {
        setLoading(false);
      }

    };
    getResult();
  }, []);

  return [{ data, error, loading }];
}

export default useJsonFetch;
