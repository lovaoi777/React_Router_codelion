import React from "react";
import styled from "styled-components";

const TodoHeadBlock = styled.div`
  padding-top: 48px;
  padding-left: 32px;
  padding-right: 32px;
  padding-bottom: 24px;
  border: 1px solid #e9ecef;

  h1 {
    margin: 0px;
    font-size: 36px;
    color: #343a40;
  }

  .day {
    color: #868e96;
    margin-top: 4px;
    font-size: 21px;
  }
  .tasks-left {
    color: #20c997;
    font-size: 18px;
    margin-top: 40px;
    font-weight: bold;
  }
`;

function TodoHead() {
  return (
    <TodoHeadBlock>
      <h1>2022년 7월 25일</h1>
      <div className="day">수요일</div>
      <div className="tasks-left">할일 2개 남았음</div>
    </TodoHeadBlock>
  );
}

export default TodoHead;
