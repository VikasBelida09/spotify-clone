import React from "react";
import { useStateValue } from "../../Context/StateProvider";
import Navbar from "../Navbar/Navbar";
import CheckoutProduct from "../CheckoutProduct/CheckoutProduct";
import SubTotal from "../SubTotal/SubTotal";
import './Checkout.css'
const Checkout = () => {
  const [{ basket }] = useStateValue();
  return (
    <>
      <Navbar />
      <div className="checkout">
        <div className="checkout__left">
          <img
            className="checkout__image"
            src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
            alt=""
          />
          {basket.length === 0 ? (
            <div>
              <h2>Your Basket is empty</h2>
            </div>
          ) : (
            <div>
              <h2>Your Shopping Basket</h2>
              {basket.map((item) => (
                <CheckoutProduct
                  id={item.id}
                  title={item.title}
                  image={item.image}
                  price={item.price}
                  rating={item.rating}
                />
              ))}
            </div>
          )}
        </div>
        {basket.length > 0 && (
          <div className="checkout__right">
            <SubTotal />
          </div>
        )}
      </div>
    </>
  );
};

export default Checkout;
