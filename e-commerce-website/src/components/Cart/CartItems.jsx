import React, { useContext } from "react";
import CartContext from "../../store/CartContext";
const CartItems = () => {
     const { cartItems} = useContext(CartContext);
  return (
    <>
      <div className=" d-flex justify-content-around">
        <p>ITEM</p>
        <p>PRICE</p>
        <p>QUANTITY</p>
      </div>
      <div className=" m-auto" style={{ width: "80%" }}>
        {cartItems.map((e, i) => (
          <div key={i} className="mt-1 position-relative">
            <div className="d-flex ">
              <div style={{ width: "20%" }}>
                <img
                  src={e.imageUrl}
                  style={{ height: "60px" }}
                  className="rounded-3"
                />
                <p style={{ width: "150px" }}>{e.title}</p>
              </div>
              <p style={{ marginLeft: "68px" }}>$ {e.price}</p>
              <p style={{ marginLeft: "140px" }}>{e.quantity}</p>
            </div>
            <div style={{ position: "absolute", right: "10px", top: "40px" }}>
              <button className="btn btn-danger btn-sm">REMOVE</button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default CartItems;
