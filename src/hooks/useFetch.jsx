import { useState, useEffect, useCallback } from "react";

export const useFetch = (url, options) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const fetchData = useCallback(
    async (options = {}) => {
      try {
        setIsLoading(true)
        let response = null

        if (options.params) {
          const param = Object.entries(options.params)
          response = await fetch(
            `${url}?${param.map(([key, value]) => `${key}=${value}`).join('&')}`
          )
        } else {
          response = await fetch(url)
        }

        const data = await response.json()
        setIsLoading(false)
        setData(data)
      } catch (error) {
        setIsLoading(false)
        setError(error)
      } finally {
        setIsLoading(false)
      }
    },
    [url, options]
  )

  useEffect(() => {
     fetchData(options)
    return () => {
      setError(null)
      setIsLoading(true)
      setData(null)
    }
  }, []);

  return { data, isLoading, error, refetch: fetchData };
};
