import { Avatar, Comment, Tooltip } from 'antd';
import moment from 'moment';
import React from 'react';

const CommentItem = ({ data }) => {
  return (
    <Comment
      author={<a>{data.username}</a>}
      avatar={<Avatar src={data.profileURL} alt="Han Solo" />}
      content={<p>{data.content}</p>}
      datetime={
        <Tooltip title={data.createAt}>
          <span>{moment().fromNow()}</span>
        </Tooltip>
      }
    />
  );
};

export default CommentItem;
