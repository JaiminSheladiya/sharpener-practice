import axios from 'axios';
import React, { useState } from 'react'

const Login = () => {
    
   const [userData, setUserData] = useState({
     email: "",
     password: "",
   });

   const handleChange = (e) => {
     const { placeholder, value } = e.target;
     setUserData({ ...userData, [placeholder]: value });
   };
   const handleSubmit =  (e) => {
       e.preventDefault();
       
 fetch(
   "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyAAXV5Vs62BDdmIhqYmBwYQ_embaTIn_o0",
   {
     method: "POST",
     body: JSON.stringify({
       email: userData.email,
       password: userData.password,
       returnSecureToken: true,
     }),
     headers: {
       "Content-Type": "application/json",
     },
   }
 )
   .then((res) => {
     if (res.ok) {
       return res.json();
     } else {
       res.json().then((data) => {
         var errorMessage = "Authentication failed";
           if (data.error.message) alert(data.error.message)
           else alert(errorMessage)
         throw new Error(errorMessage);
       });
     }
   })
   .then((data) => {
     localStorage.setItem("token", data.idToken);
   })
   .catch((err) => console.log(err.message));
      
       
     document.querySelector("form").reset();
   };

  return (
    <div>
      <h1 className="display-1 border-bottom border-3 border-dark">
        Login
      </h1>
      <form
        onSubmit={handleSubmit}
        className="form m-auto my-5 w-25 p-3 shadow-lg rounded-3"
      >
        <div className=" form-floating mb-3">
          <input
            type="email"
            className="form-control"
            onChange={handleChange}
            placeholder="email"
            required
          />
          <label>Email address</label>
        </div>

        <div className=" form-floating mb-3">
          <input
            type="password"
            className="form-control"
            onChange={handleChange}
            placeholder="password"
            required
          />
          <label>Password</label>
        </div>

        <input type="submit" className=" btn btn-secondary" />
      </form>
    </div>
  );
}

export default Login