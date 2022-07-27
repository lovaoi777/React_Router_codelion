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

function WritePost() {
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
      <PostTitleDiv>
        <PostTitle>글쓰기</PostTitle>
      </PostTitleDiv>
      <PostWriteDiv>
        <TitleInput
          name="title"
          value={title}
          placeholder="제목을 입력해주세요. (15자 이내) "
          onChange={onChange}
        />
        <ContentsInput
          name="content"
          value={content}
          cols="30"
          rows="10"
        ></ContentsInput>
      </PostWriteDiv>
      <PostSubmitDiv>
        <PostSubmit>작성완료</PostSubmit>
      </PostSubmitDiv>
    </PostSection>
  );
}

export default WritePost;
