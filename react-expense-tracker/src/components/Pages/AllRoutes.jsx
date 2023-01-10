import React, { useContext } from 'react'
import { Route, Routes } from 'react-router-dom'
import {AuthContext} from '../../context/AuthContext';
import Login from '../Auth/Login';
import Signup from '../Auth/Signup';
import VarifyEmail from '../Auth/VarifyEmail';
import CompleteProfilePage from '../CompleteProfile/CompleteProfilePage';
import Home from './Home'

const AllRoutes = () => {
    const { isLogin } = useContext(AuthContext)
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/auth" element={isLogin ? <Login /> : <Signup />} />
      <Route path="/completeProfile" element={<CompleteProfilePage />} />
      <Route path="/VarifyEmail" element={<VarifyEmail />} />
    </Routes>
  );
}

export default AllRoutes