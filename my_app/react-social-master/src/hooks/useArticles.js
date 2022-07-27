import { useEffect, useState } from 'react';
import { getAllDocs } from '../services/db';

export function useArticles() {
  const [data, setData] = useState([]);
  useEffect(() => {
    refetch();
  }, []);

  const refetch = () => {
    getAllDocs('articles').then(articles => {
      setData(articles);
    });
  };

  return { data, refetch, setData };
}
