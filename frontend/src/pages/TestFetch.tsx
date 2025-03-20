import React, { useEffect, useState } from 'react';
import strapiClient from '../lib/strapi';

const TestFetch = () => {
  const [result, setResult] = useState<any>(null);
  const [error, setError] = useState<any>(null);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const response = await strapiClient.get('/articles', {
          params: { populate: '*' },
        });
        console.log('📦 API Response:', response.data);
        setResult(response.data);
      } catch (err: any) {
        console.error('❌ API Error:', err);
        setError(err);
      }
    };

    fetchArticles();
  }, []);

  if (error) return <pre>Erreur API : {JSON.stringify(error.message)}</pre>;
  if (!result) return <p>Chargement...</p>;

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Résultat brut depuis /articles</h2>
      <pre className="bg-gray-100 p-4 rounded overflow-x-auto text-sm">
        {JSON.stringify(result, null, 2)}
      </pre>
    </div>
  );
};

export default TestFetch;
