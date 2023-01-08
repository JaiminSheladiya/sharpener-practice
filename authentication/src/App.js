import { useContext } from 'react';
import { Switch, Route, Routes, useNavigate ,redirect} from 'react-router-dom';

import Layout from './components/Layout/Layout';
import MainNavigation from './components/Layout/MainNavigation';
import UserProfile from './components/Profile/UserProfile';
import { AuthContext } from './components/store/AuthContext';
import AuthPage from './pages/AuthPage';
import HomePage from './pages/HomePage';

function App() {
  const token = localStorage.getItem('token')
  return (
    <>
      <MainNavigation />
      <Routes>
        <Route path="/" element={<HomePage />} />

        
        <Route path="/auth" element={<AuthPage />} />

        {token && <Route path="/profile" element={<UserProfile />} />}
     <Route path='*' element={<HomePage />}></Route>
      </Routes>
    </>
  );
}

export default App;
