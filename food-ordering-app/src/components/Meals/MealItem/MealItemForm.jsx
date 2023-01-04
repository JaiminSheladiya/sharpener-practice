import React, { useContext, useEffect, useRef, useState } from "react";
import CartContext from "../../../store/cart-context";
import "./MealItemForm.css";
import { v4 } from "uuid"; 

const MealItemForm = ({ details }) => {
   const inputRef  = useRef();
  const {setCartItems } = useContext(CartContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    setCartItems((prev)=>[...prev , {
        id : v4(), 
        title: details.title,
         price: details.price,
         amount: inputRef.current.value,
       }])
    };
  return (
    <form className="form" onSubmit={(e)=>handleSubmit(e)}>
           <div className="input">
        <label>Amount</label>
        <input
          min="1"
          defaultValue="1"
          type="number"
          ref={inputRef}
        />
      </div>
      <button>Add</button>
    </form>
  );
};

export default MealItemForm;
