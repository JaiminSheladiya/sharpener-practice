import React, { useContext } from "react";
import { HiShoppingCart } from "react-icons/hi";
import { Link } from "react-router-dom";
import CartContext from "../../store/CartContext";
const Header = () => {
  const { cartItems, setShow } = useContext(CartContext);

  return (
    <>
      <header className=" d-flex p-2 justify-content-around header ">
        <div className=" d-flex justify-content-between gap-4">
          <button className=" btn">
            <Link to="/" id="link">
              HOME
            </Link>
          </button>
          <button className=" btn">STORE</button>
          <button className=" btn text-white">
            <Link to="/about" id="link">
              ABOUT
            </Link>
          </button>
        </div>
        <div
          onClick={() => setShow(true)}
          className="btn d-flex gap-2 text-white bg-gradient"
        >
          <HiShoppingCart
            style={{ height: "25px", marginTop: "2px", width: "25px" }}
          />
          {cartItems.length}
        </div>
      </header>
      {/* <HeadText /> */}
    </>
  );
};

export default Header;
