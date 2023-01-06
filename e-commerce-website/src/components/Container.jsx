import React, { useContext, useState } from 'react'
import CartContext from '../store/CartContext';

const productsArr = [
  {
    title: "Colors",

    price: 100,

    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
  },

  {
    title: "Black and white Colors",

    price: 50,

    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
  },

  {
    title: "Yellow and Black Colors",

    price: 70,

    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
  },

  {
    title: "Blue Color",

    price: 100,

    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%204.png",
  },
];

const Container = () => {
    const {addItem } = useContext(CartContext)
  return (
    <>
      <h1 className=" display-1 border-bottom">The Generics</h1>
      <div className="row mt-4">
        {productsArr.map((e, i) => (
          <div
            key={i}
            className=" col shadow-sm rounded-5 m-1"
            style={{ cursor: "pointer" }}
          >
            <p>{e.title}</p>
            <img className=" rounded-3" src={e.imageUrl} alt={e.title} />
            <p>Price : {e.price}</p>
            <button
              onClick={() => addItem(e)}
              className="btn btn-primary btn-sm mb-3"
            >
              ADD TO CART
            </button>
          </div>
        ))}
      </div>
    </>
  );
}

export default Container