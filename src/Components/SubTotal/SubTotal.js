import React from "react";
import CurrencyFormat from "react-currency-format";
import { useStateValue } from "../../Context/StateProvider";
import "./SubTotal.css";
import { getBasketTotal } from "../../reducer";
const SubTotal = () => {
  const [{ basket }] = useStateValue();
  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              SubTotal ({basket.length} items): <strong>{`${value}`}</strong>
            </p>
            <small className="subtotal__gift">
              <input type="checkbox" name="" id="" /> This Order contains a gift
            </small>
          </>
        )}
        decimalScale={2}
        value={getBasketTotal(basket)}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      />
      <button onClick={}>Proceed To checkout</button>
    </div>
  );
};

export default SubTotal;
