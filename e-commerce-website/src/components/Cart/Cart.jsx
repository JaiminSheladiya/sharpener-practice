import React, { useState } from "react";
import { HiShoppingCart } from "react-icons/hi";
import Modal from "../UI/Modal";
import CartItems from "./CartItems";
const Cart = () => {
  return (
    <>
      <Modal
        title={
          <>
            Cart <HiShoppingCart style={{ height: "25px", width: "25px" }} />
          </>
        }
        body={<CartItems />}
       
      />
    </>
  );
};

export default Cart;
