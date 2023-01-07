import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import CartContext from '../store/CartContext';
import productsArr from '../productsList';
const Container = () => {
  const { addItem } = useContext(CartContext)
  const navigate = useNavigate()
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
            <div className='img'>
              <img
                className="rounded-3"
                onClick={() => navigate(`/products/${e.id}`)}
                src={e.imageUrl}
                alt={e.title}
              />
            </div>
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