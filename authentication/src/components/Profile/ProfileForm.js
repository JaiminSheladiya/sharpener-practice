import { useContext, useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../store/AuthContext';
import classes from './ProfileForm.module.css';

const ProfileForm = () => {
  const { token, setToken } = useContext(AuthContext)
  console.log(token)
  const navigate = useNavigate()
const InputRef = useRef()
  useEffect(() => {
    if(!token) navigate('/auth')
  }, [])
  
  function handleSubmit(e) {
    e.preventDefault()
    console.log(InputRef.current.value)
    fetch(
      "https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyAAXV5Vs62BDdmIhqYmBwYQ_embaTIn_o0",
      {
        method: "POST",
        body: JSON.stringify({
          idToken : token,
          password: InputRef.current.value,
          returnSecureToken: true,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      }
    ).then((res) => {
      console.log(res)
      if (res.ok) {
      alert("Password changed successfully");
        return res.json()
      } else {
        res.json().then((data) => {
          let errorMessage = "Authentication failed";
          if (data && data.error && data.error.message)
            errorMessage = data.error.message;
          
          throw new Error(errorMessage)
        });
      }
      
    }).then(data => {
      setToken(data.idToken)
    }).catch(err => alert(err.message))
      
  }

  return (
    <form className={classes.form} onSubmit={handleSubmit}>
      <div className={classes.control}>
        <label htmlFor='new-password'>New Password</label>
        <input type='password' ref={InputRef} id='new-password' />
      </div>
      <div className={classes.action}>
        <button>Change Password</button>
      </div>
    </form>
  );
}

export default ProfileForm;
