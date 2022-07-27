import { EachPostLi, PostLink, PostRepl } from "./styledComponent";
import { faLocationPin } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

import { useNavigate } from "react-router-dom";

function EachPost({ title, postID }) {
  const Navigate = useNavigate();
  const goPost = () => {
    Navigate(`${"/post/" + postID}`);
  };
  return (
    <EachPostLi onClick={goPost}>
      <div>
        <FontAwesomeIcon icon={faLocationPin} />
        <PostLink>{title}</PostLink>
      </div>
    </EachPostLi>
  );
}

export default EachPost;
