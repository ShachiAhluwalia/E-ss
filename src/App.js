import React from 'react';
import { Blog,WasE,FloatingButton} from './containers';
import {Home,Navbar} from './components';
import { Routes, Route} from 'react-router-dom';
function App() {
  return (
    <>
            <Navbar />
            <FloatingButton/>

            <Routes>
              <Route path='/' element={<Home/>}/>
              <Route path='/WasE' element={<WasE/>}/>
              <Route path='/blog' element={<Blog/>}/>
            </Routes>
    </>
  );
}

export default App;