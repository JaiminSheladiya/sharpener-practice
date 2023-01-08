import { useContext } from 'react';
import { Switch, Route, Routes, useNavigate } from 'react-router-dom';

import Layout from './components/Layout/Layout';
import MainNavigation from './components/Layout/MainNavigation';
import UserProfile from './components/Profile/UserProfile';
import { AuthContext } from './components/store/AuthContext';
import AuthPage from './pages/AuthPage';
import HomePage from './pages/HomePage';

function App() {
  
  return (
    <>
      <MainNavigation />
      <Routes>
        <Route path="/" element={<HomePage />} />

        <Route path="/auth" element={<AuthPage />} />

        <Route path="/profile" element={<UserProfile />} />
      </Routes>
    </>
  );
}

export default App;
