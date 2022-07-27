import React, { useEffect } from 'react';
import Article from '../Article';
import { useArticles } from '../../hooks/useArticles';
import { useLocation } from 'react-router-dom';
import { Empty } from 'antd';

const ActicleList = () => {
  const { data, refetch, setData } = useArticles();
  const location = useLocation();

  useEffect(() => {
    if (/\?userid=/.test(location.search)) {
      const targetUID = location.search.split('?userid=')[1];
      setData(prev => prev.filter(d => d.userUID === targetUID));
    } else {
      refetch();
    }
  }, [location]);

  if (data.length === 0) {
    return <Empty style={{ paddingTop: '2rem', height: '100vh' }} />;
  }

  return (
    <div style={{ maxWidth: '800px', margin: 'auto' }}>
      {data.map(d => (
        <Article data={d} key={d.id} />
      ))}
    </div>
  );
};

export default ActicleList;
