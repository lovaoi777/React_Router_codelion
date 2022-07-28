import {
  LoadingDiv,
  LoadingImg,
  PagenumberDiv,
  PagingSection,
  PostListDiv,
  PostSection,
  PostTitle,
  PostTitleDiv,
  CursorDiv,
} from "./styledComponent";
import {
  faArrowsRotate,
  faPenToSquare,
  faArrowLeft,
  faArrowRight,
} from "@fortawesome/free-solid-svg-icons";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import LoadingIcon from "./img/loading.svg";
import EachPost from "./EachPost";
import { useState, useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom";

function ShowPostList() {
  //로딩 상태를 구분할수있는 변수
  const [loading, setloading] = useState(true);
  //post가 있는지 없는 구분 함수
  const [isPost, setisPost] = useState(false);
  const initialPostList = [
    { id: 1, title: "시사N 대학기자상 취재" },
    { id: 2, title: "확보, 시사N 대학기자상 취재" },
    { id: 3, title: "확보, 시사N 대학기자상 취재" },
  ];
  const [postList, setPostList] = useState([]);

  const addPost = useCallback(() => {
    setPostList((postList) => [
      ...postList,
      { id: 4, title: "확보, 시사N 대학기자상 취재" },
    ]);
  }, [postList]);
  const Nvigate = useNavigate();
  const gowrite = () => {
    Nvigate("/write");
  };

  useEffect(() => {
    setTimeout(() => {
      setPostList(initialPostList);
      setloading(false);
    }, 500);
  }, []);

  return (
    <>
      <PostSection>
        <PostTitleDiv>
          <FontAwesomeIcon onClick={addPost} icon={faArrowsRotate} />
          <PostTitle>익명계시판</PostTitle>
          <CursorDiv>
            <FontAwesomeIcon onClick={gowrite} icon={faPenToSquare} />
          </CursorDiv>
        </PostTitleDiv>
        <PostListDiv>
          {loading ? (
            <LoadingDiv>
              <LoadingImg src={LoadingIcon} />
            </LoadingDiv>
          ) : isPost ? (
            <LoadingDiv>기록된 글이 없습니다.</LoadingDiv>
          ) : (
            <ul>
              {postList.map((element) => (
                <EachPost
                  key={element.id}
                  title={element.title}
                  postID={element.id}
                />
              ))}
            </ul>
          )}
        </PostListDiv>
      </PostSection>

      <PagingSection>
        <PagenumberDiv>
          <FontAwesomeIcon icon={faArrowLeft} />
        </PagenumberDiv>
        <PagenumberDiv>2</PagenumberDiv>
        <PagenumberDiv>
          <FontAwesomeIcon icon={faArrowRight} />
        </PagenumberDiv>
      </PagingSection>
    </>
  );
}

export default ShowPostList;
