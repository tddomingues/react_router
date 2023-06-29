import { useEffect, useState } from "react";

export const useFetch = (url) => {
  const [data, setData] = useState(null);

  const [loading, setLoading] = useState(false);

  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const res = await fetch(url);
        const json = await res.json();
        setData(json);
        setError(null);
      } catch (error) {
        console.log(error.message);

        setError("Houver um erro ao carregar os dados!");
      }

      setLoading(false);
    };
    fetchData();
  }, [url]);

  return { data, loading, error };
};
