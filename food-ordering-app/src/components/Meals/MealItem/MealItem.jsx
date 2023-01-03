import React from "react";
import './MealItem.css'
const MealItem = ({ title, desc, price }) => {
  return (
    <li className="meal">
      <div>
        <h3>{title}</h3>
        <div className="description">{desc}</div>
        <div className="price">{price}</div>
      </div>
      <div></div>
    </li>
  );
};

export default MealItem;
