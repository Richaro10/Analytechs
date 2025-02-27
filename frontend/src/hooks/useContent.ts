import { useState, useEffect } from 'react';
import strapiClient from '../lib/strapi';

export function useContent<T>(contentType: string) {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchContent = async () => {
      try {
        setLoading(true);
        const response = await strapiClient.get(`/${contentType}`);
        setData(response.data.data);
      } catch (err) {
        setError(err instanceof Error ? err : new Error('Failed to fetch content'));
      } finally {
        setLoading(false);
      }
    };

    fetchContent();
  }, [contentType]);

  return { data, loading, error };
}