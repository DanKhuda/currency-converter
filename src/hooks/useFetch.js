import { useEffect, useState } from "react";

const useFetch = (url) => {
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw Error("could not fetch the data from resource");
        }
        return response.json();
      })
      .then((result) => {
        setData(result.rates);
        setIsLoading(false);
        setError(null);
      })
      .catch((err) => {
        setIsLoading(false);
        setError(err.message);
      });
  }, [url]);
  return { data, isLoading, error };
};

export default useFetch;
