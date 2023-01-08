import { useState } from 'react';

import classes from './AuthForm.module.css';

const AuthForm = () => {
  const [isLogin, setIsLogin] = useState(true);
  let [creds,setCreds] = useState({email : '',password : ''})
  const [loading , setLoading] = useState(false)
  const switchAuthModeHandler = () => {
    setIsLogin((prevState) => !prevState);
  };

  const handleChange =(e) => {
    const { id, value } = e.target
    setCreds({...creds , [id] : value})
    
  }

  const submitHandler = (e) => {
    e.preventDefault()
 setLoading(true);
    if (isLogin) {
      
    fetch(
      "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyAAXV5Vs62BDdmIhqYmBwYQ_embaTIn_o0",
      {
        method: "POST",
        body: JSON.stringify({
          email: creds.email,
          password: creds.password,
          returnSecureToken: true,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      }
    ).then((res) => {
      setLoading(false);
      if (res.ok) {
        return res.json()
      } else {
        res.json().then((data) => {
          let errorMessage = "Authentication failed";
          if (data && data.error && data.error.message)
            errorMessage = data.error.message;
          
          throw new Error(errorMessage)
        });
      }
    }).then(data =>{console.log(data.idToken);}).catch(err=>alert(err.message))
      

      

      
      

    } else {
     
      fetch(
        "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key="
        , {
          method: 'POST',
          body: JSON.stringify({
            email: creds.email,
            password: creds.password,
            returnSecureToken : true
          }),
          headers: {
            'Content-Type' : 'application/json'
          }
        }).then(res => {
    setLoading(false);

          if (res.ok) {
            
          } else {
            res.json().then(data => { 
              let errorMessage = 'Authentication failed'
              if(data && data.error && data.error.message) errorMessage = data.error.message
            alert(errorMessage)
            })
          }
        })
        ;
    }
  }
  return (
    <section className={classes.auth}>
      <h1>{isLogin ? "Login" : "Sign Up"}</h1>
      <form onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor="email">Your Email</label>
          <input
            onChange={(e) => handleChange(e)}
            type="email"
            id="email"
            required
          />
        </div>
        <div className={classes.control}>
          <label htmlFor="password">Your Password</label>
          <input
            onChange={(e) => handleChange(e)}
            type="password"
            id="password"
            required
          />
        </div>
        <div className={classes.actions}>
          {loading ? (
            <p>Sending request...</p>
          ) : (
            <button>{isLogin ? "Login" : "Create Account"}</button>
          )}
          <button
            type="button"
            className={classes.toggle}
            onClick={switchAuthModeHandler}
          >
            {isLogin ? "Create new account" : "Login with existing account"}
          </button>
        </div>
      </form>
    </section>
  );
};

export default AuthForm;
