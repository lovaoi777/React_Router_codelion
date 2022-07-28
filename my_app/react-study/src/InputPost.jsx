import React, { useEffect, useState, useRef } from "react";
import { ContentsInput, TitleInput } from "./styledComponent";
function InputPost({ title, onChange, content }) {
  const titleInput = useRef();
  const contentInput = useRef();
  useEffect(() => {
    titleInput.current.focus();
  }, []);
  const onKeyUp = (e) => {
    if (e.key === "Enter") {
      contentInput.current.focus();
    }
  };
  return (
    <>
      <TitleInput
        name="title"
        value={title}
        placeholder="제목을 입력해주세요. (15자 이내) "
        onChange={onChange}
        ref={titleInput}
        onKeyUp={onKeyUp}
      />
      <ContentsInput
        name="content"
        value={content}
        cols="30"
        rows="10"
        ref={contentInput}
      ></ContentsInput>
    </>
  );
}
export default InputPost;
