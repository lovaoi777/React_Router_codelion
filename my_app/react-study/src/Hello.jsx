import React from "react";
import styled from "styled-components";

function Hello() {
  const StyledButton = styled.button`
    color: red;
    background-color: gray;
  `;
  return <StyledButton>나만의 버튼</StyledButton>;
}
//헬로우 월드를 div태그로 감싼다.
export default Hello;
