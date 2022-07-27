import React, { useEffect, useRef, useState } from 'react';
import { Button, Form, Input } from 'antd';
import styled from 'styled-components';
import UploadImage from '../../components/UploadImage';
import { removeFileFromStorage, uploadFile, getURLFromFullPath } from '../../services/storage';
import { addDocInCollection, modifyDoc, removeDoc } from '../../services/db';
import { useNavigate } from 'react-router-dom';
import { arrayUnion } from 'firebase/firestore';
import { getCurrentUser } from '../../services/auth';
import dayjs from 'dayjs';

const Write = () => {
  const ref = useRef(null);
  const navigate = useNavigate();
  const [saveImages, setSaveImages] = useState([]);

  const onUpload = file => {
    uploadFile(`articles/${ref.current.id}/${file.name}`, file).then(snapshot => {
      console.log(snapshot);
      getURLFromFullPath(`articles/${ref.current.id}/${file.name}`).then(path => {
        modifyDoc('articles', ref.current.id, {
          filePaths: arrayUnion(path),
        });
      });
      setSaveImages(prev => [...prev, `articles/${ref.current.id}/${file.name}`]);
    });
  };

  const onRemove = file => {
    const { name } = file;
    removeFileFromStorage(`articles/${ref.current.id}/${name}`);
    console.log(file);
  };

  const onSubmit = async values => {
    const { content } = values;
    await modifyDoc('articles', ref.current.id, {
      username: getCurrentUser().displayName || '익명의 사용자',
      userUID: getCurrentUser().uid,
      content,
      like: [],
      comment: [],
      createAt: dayjs(new Date()).format('YYYY-MM-DD hh:mm'),
      updateAt: dayjs(new Date()).format('YYYY-MM-DD hh:mm'),
    });
    alert('작성되었습니다');
    navigate(-1);
    console.log(values);
  };

  const onCancel = async () => {
    console.log('cancel');
    saveImages.forEach(fullPath => removeFileFromStorage(fullPath));
    setSaveImages([]);
    const res = await removeDoc('articles', ref.current.id);
    if (res) {
      navigate(-1);
    }
  };

  useEffect(() => {
    addDocInCollection('articles', {}).then(docRef => {
      console.log('게시글이 먼저 생성되었습니다.');
      console.log(docRef);
      ref.current = docRef;
    });
  }, []);

  return (
    <WriteWrapper>
      <h1>게시글 작성</h1>
      <UploadImage onUpload={onUpload} onRemove={onRemove} />
      <Form onFinish={onSubmit}>
        <Form.Item name={'content'}>
          <Input.TextArea rows={4} className={'content'} placeholder={'내용을 입력하세요'} />
        </Form.Item>
        <Button type={'primary'} style={{ width: '100%', marginBottom: '5px' }} htmlType="submit">
          작성
        </Button>
        <Button danger style={{ width: '100%' }} onClick={onCancel}>
          최소
        </Button>
      </Form>
    </WriteWrapper>
  );
};

export default Write;

const WriteWrapper = styled.div`
  & > h1 {
    font-weight: bold;
    text-align: center;
  }

  & .content {
    margin: 10px 0;
  }
`;
