import React from 'react'
import { Routes, Route, } from 'react-router-dom';
import Home from './Pages/HomePage/Home';

function RoutesApp() {
  return (
    //colocar dentro de Routes os elementos a serem recarregados 
    <Routes>
      <Route path="/" element={<Home />} />

    </Routes>
  )
}

export default RoutesApp;