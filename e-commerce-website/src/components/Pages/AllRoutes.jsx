import React from 'react'
import { Route, Routes } from 'react-router-dom'
import About from './About';
import Home from './Home';
import Store from './Store'

const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/store" element={<Store />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
}

export default AllRoutes


