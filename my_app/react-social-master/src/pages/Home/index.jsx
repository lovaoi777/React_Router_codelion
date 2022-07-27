import React from 'react';
import Container from '../../layouts/Container';
import { WriteIcon, WriteIconWrap } from './styles.tsx';
import ActicleList from '../../components/ArticleList';

const Home = () => {
  return (
    <>
      <Container>
        <ActicleList />
      </Container>
      <WriteIconWrap to={'/write'}>
        <WriteIcon />
      </WriteIconWrap>
    </>
  );
};
export default Home;
