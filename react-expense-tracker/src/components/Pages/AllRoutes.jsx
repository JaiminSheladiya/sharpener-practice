import React, { useContext } from 'react'
import { Route, Routes } from 'react-router-dom'
import {AuthContext} from '../../context/AuthContext';
import PrivateRoute from '../../context/PrivateRoute';
import Login from '../Auth/Login';
import Signup from '../Auth/Signup';
import VarifyEmail from '../Auth/VarifyEmail';
import CompleteProfilePage from '../CompleteProfile/CompleteProfilePage';
import Expenses from './Expenses/Expenses';
import Home from './Home'

const AllRoutes = () => {
    const { isLogin } = useContext(AuthContext)
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/auth" element={isLogin ? <Login /> : <Signup />} />
      <Route path="/completeProfile" element={<CompleteProfilePage />} />
      <Route path="/VarifyEmail" element={<VarifyEmail />} />
      <Route
        path="/expenses"
        element={
          <PrivateRoute>
            <Expenses />
          </PrivateRoute>
        }
      />
    </Routes>
  );
}

export default AllRoutes