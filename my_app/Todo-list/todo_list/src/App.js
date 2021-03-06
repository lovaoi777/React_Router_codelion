import React from 'react';
import {createGlobalStyle} from 'styled-components'
import TodoTemplate from './components/TodoTemplate';
import TodoHead from './components/TodoHead';
import TodoLIst from './components/TodoList';
import TodoCreate from './components/TodoCreate';
const GlobalStyle = createGlobalStyle`
  body{
    background :  #e9ecef;
  }
`

function App(){
  return (
    <div>
    <GlobalStyle />
    <TodoTemplate>
      <TodoHead / >
      <TodoLIst / >
      <TodoCreate />
    </TodoTemplate>
    </div>
  );
};

export default App;