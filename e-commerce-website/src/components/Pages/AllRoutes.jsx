import React from 'react'
import { Route, Routes } from 'react-router-dom'
import About from './About';
import ContactUs from './ContactUs';
import Home from './Home';
import ProductPage from './ProductPage';
import Store from './Store'

const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/store" element={<Store />} />
        <Route path="/about" element={<About />} />
        <Route path="/products/:id" element={<ProductPage/>} />
        <Route path="/ContactUs" element={<ContactUs />} />
      </Routes>
    </div>
  );
}

export default AllRoutes


