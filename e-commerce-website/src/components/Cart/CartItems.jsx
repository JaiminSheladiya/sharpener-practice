import React from "react";
const cartElements = [
  {
    title: "Colors",

    price: 100,

    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",

    quantity: 2,
  },

  {
    title: "Black and white Colors",

    price: 50,

    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",

    quantity: 3,
  },

  {
    title: "Yellow and Black Colors",

    price: 70,

    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",

    quantity: 1,
  },
];
const CartItems = () => {
  return (
    <>
      <div className=" d-flex justify-content-around">
        <p>ITEM</p>
        <p>PRICE</p>
        <p>QUANTITY</p>
      </div>
      <div className=" m-auto" style={{width :'80%'}}>
        {cartElements.map((e, i) => (
          <div key={i} className="mt-1 position-relative">
            <div className="d-flex ">
              <div style={{ width: "20%" }}>
                <img
                  src={e.imageUrl}
                  style={{ height: "60px" }}
                  className="rounded-3"
                />
                <p style={{width : '150px'}}>{e.title}</p>
              </div>
              <p style={{marginLeft : '68px'}}>$ {e.price}</p>
              <p style={{marginLeft : '140px'}}>{e.quantity}</p>
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
