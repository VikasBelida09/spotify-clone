import React from "react";
import './CheckProduct.css'
import { useStateValue } from "../../Context/StateProvider";
const CheckoutProduct = ({ id, title, image, rating, price }) => {
  const [{},dispatch]=useStateValue()
  const removeProduct=()=>{
    dispatch({
      type:'REMOVE_FROM_BASKET',
      id:id
    })
  }
  return (
    <div className="checkoutProduct">
      <img className="checkoutProduct__image" src={image} alt="" />
      <div className="checkoutProduct__info">
        <p className="checkoutProduct__title">{title}</p>
        <p className="checkoutProduct__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="checkoutProduct__rating">
          {Array(rating)
            .fill()
            .map((_) => (
              <span role="img" aria-label="star">
                ⭐
              </span>
            ))}
        </div>
        <button className="checkoutProduct__basket" onClick={removeProduct}>Remove from basket</button>
      </div>
    </div>
  );
};

export default CheckoutProduct;
