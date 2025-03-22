import { useState, useEffect } from 'react';
import strapiClient from '../lib/strapi';

interface StrapiResponseWithMeta<T> {
  data: T;
  meta: {
    pagination: {
      total: number;
      page: number;
      pageSize: number;
      pageCount: number;
    };
  };
}

export function useContent<T>(contentType: string, id?: string, params: Record<string, unknown> = {}) {
  const [data, setData] = useState<T | null>(null);
  const [meta, setMeta] = useState<StrapiResponseWithMeta<T>['meta'] | null>(null);
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
        const response = await strapiClient.get<StrapiResponseWithMeta<T>>(endpoint, {
          signal: controller.signal,
          params: { populate: '*', ...params }
        });

        if (isMounted) {
          setData(response.data.data);
          setMeta(response.data.meta || null);
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

  return { data, meta, loading, error };
}
