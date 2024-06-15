import axios from "axios";
import { useState, useEffect } from "react";

const useFetch = (url) => {
  const [datas, setDatas] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    try {
      const response = await axios.get(url);
      setDatas(response.data);
    } catch (err) {
      setError(err);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [url]);

  return { datas, isLoading, error };
};

export default useFetch;
