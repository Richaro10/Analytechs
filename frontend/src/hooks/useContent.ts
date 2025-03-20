import { useState, useEffect } from 'react';
import strapiClient from '../lib/strapi';

export function useContent<T>(contentType: string, id?: string, params: Record<string, unknown> = {}) {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    let isMounted = true;
    const controller = new AbortController();

    const fetchContent = async () => {
      try {
        setLoading(true);
        setError(null);

        const endpoint = id ? `/${contentType}/${id}` : `/${contentType}`;
        const response = await strapiClient.get(endpoint, {
          signal: controller.signal,
          params: { populate: '*', ...params }
        });

        if (isMounted) {
          // ❗ On envoie directement response.data.data, car Strapi l'encapsule dans `data`
          setData(response.data.data);
        }
      } catch (err: any) {
        if (isMounted) {
          console.error('API Error:', err);
          setError(err instanceof Error ? err : new Error('Erreur de récupération'));
        }
      } finally {
        if (isMounted) setLoading(false);
      }
    };

    fetchContent();

    return () => {
      isMounted = false;
      controller.abort();
    };
  }, [contentType, id, JSON.stringify(params)]);

  return { data, loading, error };
}
