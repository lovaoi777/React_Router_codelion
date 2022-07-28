import React, { useState } from "react";
import {
  ContentsInput,
  PostSection,
  PostSubmit,
  PostSubmitDiv,
  PostTitleDiv,
  PostWriteDiv,
  TitleInput,
  PostTitle,
} from "./styledComponent";
import WriteTitle from "./WriteTitle";
import InputPost from "./InputPost";

const SubmitComponent = () => (
  <PostSubmitDiv>
    <PostSubmit>작성완료</PostSubmit>
  </PostSubmitDiv>
);

const WritePost = (props) => {
  //usestate함수
  const [inputs, setinput] = useState({
    title: "",
    content: "",
  });
  //2개를 동시에 관리하기 위한 객체 만들어주기
  const { title, content } = inputs;

  //onchange함수  만들어주기
  const onChange = (e) => {
    const { value, name } = e.target;
    setinput({
      ...inputs, //원하는 값을 덮어씌우기
      [name]: value,
    });
  };

  return (
    <PostSection>
      <WriteTitle />
      <PostWriteDiv>
        <InputPost
          onChange={onChange}
          title={title}
          content={content}
        ></InputPost>
      </PostWriteDiv>
      <PostSubmitDiv>
        <PostSubmit>작성완료</PostSubmit>
      </PostSubmitDiv>
    </PostSection>
  );
};

export default WritePost;
