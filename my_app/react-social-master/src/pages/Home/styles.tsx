import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { EditOutlined } from '@ant-design/icons';

export const WriteIconWrap = styled(Link)`
  position: fixed;
  bottom: 20px;
  right: 20px;
`;

export const WriteIcon = styled(EditOutlined)`
  font-size: 2em;
  background: #f7853c;
  color: white;
  padding: 0.5em;
  border-radius: 50%;
`;
