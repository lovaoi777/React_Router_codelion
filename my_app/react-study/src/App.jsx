import { Main, MediaDiv } from "./styledComponent";
//작성한 컴포넌트는 모드 import 되어있다.
import { GlobalStyles, darkTheme, lightTheme } from "./styles";
import { ThemeProvider } from "styled-components";
import { useState } from "react";
import Header from "./Header";
import Slogun from "./Slogun";
import ShowPostList from "./ShowPostList";
import Footer from "./Footer";
import { Route, Routes } from "react-router-dom";
import Showpost from "./Showpost";
import WritePost from "./WritePost";
//App 뼈대
function App() {
  //다크모드의 하기위한 함수
  //useState              ex) [현재상태 , 변화될 상태] = 초기값
  const [darkMode, setDarkMode] = useState(true);

  return (
    <>
      <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
        <GlobalStyles />
        <MediaDiv>
          <Header darkMode={darkMode} setDarkMode={setDarkMode} />
          <Main>
            <Slogun />
            <Routes>
              <Route path="/" element={<ShowPostList />}></Route>
              <Route path="/write" element={<WritePost></WritePost>}></Route>
              <Route
                path="/post/:postID"
                element={<Showpost></Showpost>}
              ></Route>
            </Routes>
          </Main>
          <Footer />
        </MediaDiv>
      </ThemeProvider>
    </>
  );
}

export default App;
