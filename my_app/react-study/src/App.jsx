import { Main, MediaDiv } from "./styledComponent";
//작성한 컴포넌트는 모드 import 되어있다.
import { GlobalStyles, darkTheme, lightTheme } from "./styles";
import { ThemeProvider } from "styled-components";
import { useState } from "react";
import Header from "./Header";
import Slogun from "./Slogun";
import ShowPostList from "./ShowPostList";
import Footer from "./Footer";

//App 뼈대
function App() {
  const initialPostList = [
    { id: 1, title: "시사N 대학기자상 취재", replCount: 1 },
    { id: 2, title: "확보, 시사N 대학기자상 취재", replCount: 43 },
    { id: 3, title: "확보, 시사N 대학기자상 취재", replCount: 2 },
  ];
  //다크모드의 하기위한 함수
  //useState              ex) [현재상태 , 변화될 상태] = 초기값
  const [darkMode, setDarkMode] = useState(true);
  //로딩 상태를 구분할수있는 변수
  const [loading, setloading] = useState(false);
  //post가 있는지 없는 구분 함수
  const [isPost, setisPost] = useState(false);

  const [postList, setPostList] = useState(initialPostList);

  const addPost = () => {
    setPostList((postList) => [
      ...postList,
      { id: 4, title: "확보, 시사N 대학기자상 취재", replCount: 22 },
    ]);
  };
  return (
    <>
      <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
        <GlobalStyles />
        <MediaDiv>
          <Header darkMode={darkMode} setDarkMode={setDarkMode} />
          <Main>
            <Slogun />
            <ShowPostList
              loading={loading}
              isPost={isPost}
              postList={postList}
              addPost={addPost}
            />
          </Main>
          <Footer />
        </MediaDiv>
      </ThemeProvider>
    </>
  );
}

export default App;
