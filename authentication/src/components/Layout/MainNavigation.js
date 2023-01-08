import { useContext } from 'react';
import { Link , useNavigate } from 'react-router-dom';
import { AuthContext } from '../store/AuthContext';
// import {useNavigate} from 'react-router-dom'
import classes from './MainNavigation.module.css';

const MainNavigation = () => {
  const token = localStorage.getItem("token");
  
   const navigate = useNavigate()
  return (
    <header className={classes.header}>
      <Link to='/'>
        <div className={classes.logo}>React Auth</div>
      </Link>
      <nav>
        <ul>
          <li>
            <Link to='/auth'>Login</Link>
          </li>
          <li>
            <Link to='/profile'>Profile</Link>
          </li>
          <li>
            {token ? <button onClick={() => {
              localStorage.removeItem('token')
              navigate('/auth')
            }
            }>Logout</button> : <button onClick={() => navigate('/auth')}>Login</button>}
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
