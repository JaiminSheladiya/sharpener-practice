import React from "react";
import { useParams } from "react-router-dom";
import productsArr from "../../productsList";
const ProductPage = () => {
  const { id } = useParams();
  let product = productsArr.find((el) => el.id == id);
  return (
    <>
      <div className=" d-flex gap-5 m-5">
        <div className="img shadow rounded-3">
          <img src={product.imageUrl} className="" />
        </div>
        <div>
          <h1>{product.title}</h1>
          <div>
            <p className=" mt-5">Reviews : </p>
            {product.ProductReview.map((e) => (
                <div className=" d-flex gap-3 border-bottom">
                    <p>{e.name}</p> - 
                    <p>{e.review}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductPage;
