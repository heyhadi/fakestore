import { useState, useEffect } from 'react';
import {useDispatch} from 'react-redux'
import {fetchProducts} from '../store/actions/products'

function useFetch(url) {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch()

  useEffect(() => {
    setIsLoading(true);
    dispatch(fetchProducts([]))
    fetch(url, {
        method: "GET"
    })
      .then(res => res.json())
      .then(data => {
        setData(data);
        setIsLoading(false);
        dispatch(fetchProducts([data]))

      })
      .catch(err => {
        setIsLoading(false);
        setError(err);
      });
  }, [url]);

  return {data, setData, error, isLoading};
}

export default useFetch;