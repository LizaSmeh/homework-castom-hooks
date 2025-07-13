import { useState, useEffect } from "react";

export const useFetch = (url) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  function refetch({ params }) {
    fetchData(url + +`?_limit=${params._limit}`);
  }

  async function fetchData(url) {
    setIsLoading(true);
    setError("");
    try {
      const response = await fetch(url).then((res) => res.json());
      setData(response);
    } catch (error) {
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    fetchData(url);
  }, []);

  return { data, isLoading, error, refetch };
};
