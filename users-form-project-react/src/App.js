import logo from './logo.svg';
import './App.css';
import UserForm from './components/UserForm';
import { useState } from 'react';
import ShowData from './components/ShowData';

function App() {

  const [users, setUsers] = useState([]);
  return (
    <div className="App">
      <UserForm setUsers={setUsers} />
      <ShowData users={users} />
    </div>
  );
}

export default App;
