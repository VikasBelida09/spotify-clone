import React,{useContext} from "react";
import "./Product.css";
import { useStateValue } from "../../Context/StateProvider";
import { HomeContext } from "../Home/Home";
const Product = ({ id, title, price, rating, image }) => {
  const [{},dispatch] = useStateValue();
  const {triggerSnackBar}=useContext(HomeContext)
  const addToBasket = () => {
    triggerSnackBar(true, title)
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating,
      },
    });
  };
  return (
    <div className="product">
      <div className="product__info">
        <p>{title}</p>
        <p className="product__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="product__rating">
          {Array(rating)
            .fill()
            .map((_) => (
              <span role="img" aria-label="star">
                ⭐
              </span>
            ))}
        </div>
      </div>
      <img src={image} alt="" />
      <button onClick={addToBasket}>Add To Cart</button>
    </div>
  );
};

export default Product;
