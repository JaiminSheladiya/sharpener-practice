import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from '../Auth/Login';
import About from './About';
import ContactUs from './ContactUs';
import Home from './Home';
import PrivateRoute from './PrivateRoute';
import ProductPage from './ProductPage';
import Store from './Store'

const AllRoutes = () => {
  let token = localStorage.getItem('token')
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/store' element={<PrivateRoute><Store /></PrivateRoute>} />
        <Route path="/about" element={<About />} />
        <Route path="/ContactUs" element={<ContactUs />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<Login />} />
      </Routes>
    </div>
  );
}

export default AllRoutes


