import React from 'react'
import './Input.css'
const Input = ({ input, label }) => {
  return (
    <div className="input">
      <label>{label}</label>
      <input id={input.id} {...input} />
    </div>
  );
};

export default Input