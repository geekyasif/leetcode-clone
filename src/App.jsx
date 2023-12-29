import React from 'react';
import Playground from './components/playground/Playground';
import Navbar from './components/navbar/Navbar';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/home/Home';
import Problems from './pages/problems/Problems';

function App() {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="problems" element={<Problems/>} />
        <Route path="problems/:id" element={<Playground/>}/>
      </Routes>
    </div>
  );
}

export default App;
