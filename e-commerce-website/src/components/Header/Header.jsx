import React from "react";
import {HiShoppingCart} from 'react-icons/hi'
import HeadText from "./HeadText";
const Header = () => {
  return (
    <>
      <header className=" d-flex p-2 justify-content-around header ">
        <div className=" d-flex justify-content-between gap-4">
          <button className=" btn">HOME</button>
          <button className=" btn">STORE</button>
          <button className=" btn">ABOUT</button>
        </div>
        <div className="btn d-flex gap-2 text-white bg-gradient">
          <HiShoppingCart
            style={{ height: "25px", marginTop: "2px", width: "25px" }}
          />
          0
        </div>
      </header>
      <HeadText />
    </>
  );
};

export default Header;
