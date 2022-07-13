import { createGlobalStyle } from "styled-components";

//yarn add styled-reset
import reset from "styled-reset";
//다크테마와 밝은테마를 구성되어있다.
export const lightTheme = {
  bgColor:'white',
  fontColor:'#2c2c2c',
};

export const darkTheme = {
  fontColor:'white',
  bgColor:'#2c2c2c',
};
//글로벌하게 전역에 일관성있도록 만들어준다. 기본여백을없에준다.
export const GlobalStyles = createGlobalStyle`
    ${reset}
`;
