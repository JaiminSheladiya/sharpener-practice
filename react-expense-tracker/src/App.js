import logo from './logo.svg';
import './App.css';
import AllRoutes from './components/Pages/AllRoutes';
import Header from './components/Header/Header';
import { ToastContainer } from 'react-toastify';
import ForgotPasswordModal from './components/Auth/ForgotPasswordModal';

function App() {
  return (
    <div className="App">
      <ToastContainer />
    <ForgotPasswordModal />
      <Header />
      <AllRoutes />
    </div>
  );
}

export default App;
