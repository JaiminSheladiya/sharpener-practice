import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from '../Auth/Login';
import About from './About';
import ContactUs from './ContactUs';
import Home from './Home';
import ProductPage from './ProductPage';
import Store from './Store'

const AllRoutes = () => {
  let token = localStorage.getItem('token')
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        {token && <Route path="/store" element={<Store />} />}
        {token && <Route path="/products/:id" element={<ProductPage />} />}

        <Route path="/about" element={<About />} />
        <Route path="/ContactUs" element={<ContactUs />} />
        <Route path="/login" element={<Login />} />
        <Route path='*' element={<Login />} />
      </Routes>
    </div>
  );
}

export default AllRoutes


