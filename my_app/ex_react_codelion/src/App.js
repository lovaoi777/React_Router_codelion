import React from 'react';
import {Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import Movies from './pages/Movies';
import Menubar from './pages/Menubar';
const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Menubar />}>
          <Route path='/Home' element={<Home />}></Route>
          <Route path='/Movies' element={<Movies />}></Route>
        </Route>
      </Routes>
    </div>
  );
};

export default App;