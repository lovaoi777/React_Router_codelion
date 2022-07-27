import React from 'react';
import {Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import Movies from './pages/Movies';
import Menubar from './pages/Menubar';
import Movie from './pages/movie';
const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Menubar />}>
          <Route path='/Home' element={<Home />}></Route>
          <Route path='/Movies' element={<Movies />}>
            <Route path=':movieId' element={<Movie />} />
           </Route>
           <Route path='*' element={<div>There's nothing here!</div>} /> 
        </Route>
      </Routes>
    </div>
  );
};

export default App;