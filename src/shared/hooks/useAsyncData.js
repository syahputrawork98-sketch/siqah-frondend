import { useCallback, useEffect, useState } from "react";

export function useAsyncData(asyncFn, { immediate = true, initialData = null } = {}) {
  const [data, setData] = useState(initialData);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(Boolean(immediate));

  const run = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    try {
      const result = await asyncFn();
      setData(result);
      return result;
    } catch (err) {
      setError(err);
      return null;
    } finally {
      setIsLoading(false);
    }
  }, [asyncFn]);

  useEffect(() => {
    if (!immediate) {
      return;
    }
    run();
  }, [immediate, run]);

  return {
    data,
    setData,
    error,
    isLoading,
    reload: run,
  };
}

