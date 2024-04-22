
import { useState, useEffect, startTransition } from "react";

interface State<T> {
  data: T | null;
  error: Error | null;
  isLoading: boolean;
}

export const useFetch = <T>(url: string): State<T> => {
  const [data, setData] = useState<T | null>(null);
  const [error, setError] = useState<Error | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const data: T = await response.json();
        const acf = data;
          startTransition(() => {setData(acf)});
       
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
      } catch (error: any) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [url]);
  

  return { data, error, isLoading };
};
