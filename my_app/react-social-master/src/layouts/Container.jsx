import React from 'react';
import { Layout } from 'antd';
import { Content, Header } from 'antd/es/layout/layout';
import { Menu, MenuItem } from '@szhsin/react-menu';
import '@szhsin/react-menu/dist/core.css';
import { Link } from 'react-router-dom';
import { getCurrentUser, logOut } from '../services/auth';

const Container = ({ children }) => {
  return (
    <Layout>
      <Header
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          padding: '0 10px',
        }}
      >
        <Link to={'/'}>
          <h1 style={{ color: 'white', fontSize: '1.3rem', fontWeight: 'bold' }}>Konstagram</h1>
        </Link>
        <div>
          <Menu
            menuButton={
              <div style={{ width: '30px', cursor: 'pointer' }}>
                <img src="/images/avatar.webp" alt="avatar" style={{ width: '100%', borderRadius: '50%' }} />
              </div>
            }
          >
            <Link to={`/profile/${'myuserId'}`}>
              <MenuItem>내 정보</MenuItem>
            </Link>
            <Link to={`?userid=${getCurrentUser().uid}`}>
              <MenuItem>내 게시글</MenuItem>
            </Link>
            <MenuItem onClick={() => logOut()}>로그아웃</MenuItem>
          </Menu>
        </div>
      </Header>
      <Content style={{ padding: '0 10px' }}>{children}</Content>
    </Layout>
  );
};

export default Container;
