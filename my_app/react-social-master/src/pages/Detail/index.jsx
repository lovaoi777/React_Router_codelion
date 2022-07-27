import React, { useCallback, useState } from 'react';
import Container from '../../layouts/Container';
import { useParams } from 'react-router-dom';
import Article from '../../components/Article';
import { useArticle } from '../../hooks/useArticle';
import CommentItem from '../../components/Comment';
import { Button, Form, Input } from 'antd';
import { modifyDoc } from '../../services/db';
import { arrayUnion } from 'firebase/firestore';
import { getCurrentUser } from '../../services/auth';
import dayjs from 'dayjs';

const Detail = () => {
  const params = useParams();
  const { id } = params;
  const { data, refetch } = useArticle(id);
  const [commentValue, setCommentValue] = useState('');
  const [loading, setLoading] = useState(false);

  const onSubmitComment = useCallback(async () => {
    setLoading(true);
    const res = await modifyDoc('articles', id, {
      comment: arrayUnion({
        username: getCurrentUser().displayName || '익명의 사용자',
        userUID: getCurrentUser().uid,
        profileURL: getCurrentUser().photoURL || '/images/avatar.webp',
        content: commentValue,
        createAt: dayjs(new Date()).format('YYYY-MM-DD hh:mm'),
      }),
    });
    if (res) {
      refetch();
      setCommentValue('');
      setLoading(false);
    } else {
      alert('댓글을 다는 중 오류가 발생하였습니다');
    }
  }, [loading, commentValue, id]);

  if (!data) return;

  return (
    <Container>
      <Article data={data} />
      {data?.comment?.map((c, idx) => (
        <CommentItem key={idx} data={c} />
      ))}
      <>
        <Form.Item>
          <Input.TextArea rows={4} onChange={e => setCommentValue(e.target.value)} value={commentValue} />
        </Form.Item>
        <Form.Item>
          <Button htmlType="submit" loading={loading} onClick={onSubmitComment} type="primary">
            댓글 달기
          </Button>
        </Form.Item>
      </>
    </Container>
  );
};

export default Detail;
