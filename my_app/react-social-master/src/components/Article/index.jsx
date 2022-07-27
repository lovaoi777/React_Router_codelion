import React, { useState, useCallback, useMemo } from 'react';
import { Divider, Button, Spin, Typography } from 'antd';
import styled from 'styled-components';
import { EllipsisOutlined, HeartOutlined, HeartFilled, MessageOutlined } from '@ant-design/icons';
import { Link, useNavigate } from 'react-router-dom';
import ImageSlider from '../Carousel';
import { getCurrentUser } from '../../services/auth';
import { removeDoc } from '../../services/db';

const Article = ({ data }) => {
  const [showMenu, setShowMenu] = useState(false);
  const [isLike, setIsLike] = useState(false);
  const navigate = useNavigate();
  const isOwner = useMemo(() => getCurrentUser().uid === data.userUID, [data]);

  const toggleMenu = useCallback(
    e => {
      e.stopPropagation();
      setShowMenu(prev => !prev);
    },
    [showMenu]
  );

  const handleClickArticleWrapper = useCallback(() => {
    setShowMenu(false);
  }, []);

  const onClickLike = useCallback(() => {
    setIsLike(prev => !prev);
  }, [isLike]);
  const onClickComment = useCallback(() => {
    navigate(`/detail/${data.id}`);
  }, []);

  const onDelete = async () => {
    await removeDoc('articles', data.id);
    navigate('/');
  };

  if (!data) {
    return (
      <div style={{ width: '100%', height: '300px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <Spin size="large" />
      </div>
    );
  }

  return (
    <ArticleWrapper onClick={handleClickArticleWrapper}>
      <Header>
        <div className="profile">
          <img src="/images/avatar.webp" alt="profile" />
          <h5>
            <Link to={`?userid=${data.userUID}`}>{data.username}</Link>
          </h5>
        </div>
        {isOwner && (
          <MenuWrapper isOwner={isOwner}>
            <EllipsisOutlined style={{ fontSize: '25px', cursor: 'pointer' }} onClick={toggleMenu} />
            {showMenu && (
              <div className="list">
                <MenuItem>수정</MenuItem>
                <Divider style={{ margin: 0 }} />
                {isOwner && (
                  <MenuItem style={{ color: 'red' }} onClick={onDelete}>
                    삭제
                  </MenuItem>
                )}
              </div>
            )}
          </MenuWrapper>
        )}
      </Header>
      <AriticleContent>
        <ImageSlider data={data.filePaths} />
        <ArticleInfo>
          <div>
            <Button
              style={{
                fontSize: '1.05rem',
                border: 'none',
                background: 'transparent',
                padding: 0,
                marginRight: '10px',
              }}
              onClick={onClickLike}
              icon={isLike ? <HeartFilled style={{ color: 'red' }} /> : <HeartOutlined />}
            >
              {data.like.length}
            </Button>
            <Button
              style={{ fontSize: '1.205em', border: 'none', background: 'transparent', padding: 0 }}
              onClick={onClickComment}
              icon={<MessageOutlined />}
            >
              {data.comment.length}
            </Button>
          </div>
          <Typography.Paragraph
            ellipsis={{
              rows: 2,
              expandable: true,
              symbol: '...더보기',
            }}
            title={`${'article'}--William Shakespeare`}
          >
            {data.content} <span style={{ color: '#999' }}>{data.createAt} 작성</span>
          </Typography.Paragraph>
        </ArticleInfo>
      </AriticleContent>
    </ArticleWrapper>
  );
};

export default Article;

const ArticleWrapper = styled.div`
  width: 100%;
  margin-bottom: 10px;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  & .profile {
    display: flex;
    align-items: center;

    img {
      width: 40px;
      height: 40px;
      border-radius: 50%;
      padding: 5px;
    }

    h5 {
      font-size: 1.1em;
      margin: 0;
    }
  }
`;

const MenuWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  & .list {
    position: absolute;
    z-index: 100;
    background-color: #fff;
    bottom: ${({ isOwner }) => (isOwner ? '-60px' : '-30px')};
    right: 0;
    width: 100px;
  }
`;

const MenuItem = styled.div`
  text-align: center;
  padding: 5px 0;
  &:hover {
    background-color: #d2d2d2;
    cursor: pointer;
  }
`;

const AriticleContent = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 300px;
`;

const ArticleInfo = styled.div``;
