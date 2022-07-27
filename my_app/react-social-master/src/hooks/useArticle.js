import { useEffect, useState } from 'react';
import { getOneDoc } from '../services/db';

export function useArticle(docId) {
  const [data, setData] = useState(null);
  useEffect(() => {
    refetch();
  }, []);

  const refetch = async () => {
    const doc = await getOneDoc('articles', docId);
    setData(doc);
  };

  return { data, refetch, setData };
}
