import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";



interface FetchResponse<T> {
  count: number;
  results: T[];
}

const useData =<T> (endpoint:string) => {
  const [data, setData] = useState<T[]>([]); // Corrected variable name
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    const controller = new AbortController();
    setLoading(true);

    apiClient
      .get<FetchResponse<T>>(endpoint, { signal: controller.signal })
      .then((res) => {
        setData(res.data.results); // Corrected variable name
        setLoading(false);
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
        setLoading(false);
      });

    return () => controller.abort();
  }, []); // Added an empty dependency array to run effect only once

  return { data, error, isLoading }; // Corrected variable name
}
export default useData;

