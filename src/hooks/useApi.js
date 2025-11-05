import { useState, useCallback } from "react";

/**
 * Custom hook for API calls with loading and error states
 * Similar to async/await pattern in backend services
 */
export default useApi = (apiFunc) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const execute = useCallback(
    async (...args) => {
      try {
        setLoading(true);
        setError(null);
        const result = await apiFunc(...args);
        setData(result);
        return result;
      } catch (error) {
        const errorMessage =
          error.resposne?.data.message || "An error occurred";
        setError(errorMessage);
        throw error;
      } finally {
        setLoading(false);
      }
    },
    [apiFunc]
  );

  return [data, loading, error, execute];
};
