import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasket from "@material-ui/icons/ShoppingBasket";
import { useStateValue } from "../../Context/StateProvider";
import { auth } from "../../firebase";
const Navbar = () => {
  const [{ basket, user }] = useStateValue();
  const login = () => {
    if (user) {
      auth.signOut();
    }
  };
  const returnUserName = (emailId) => {
    return emailId
      ? emailId.toString().substr(0, emailId.toString().search("@"))
      : null;
  };
  return (
    <nav className="header">
      <Link to="/login">
        <img
          className="header__logo"
          src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
          alt="amazon logo"
        />
      </Link>
      <div className="header__search">
        <input type="text" className="header__searchInput" />
        <SearchIcon className="header__searchIcon" />
      </div>
      <div className="header__nav">
        <Link className="header__link" to={!user && "/login"}>
          <div onClick={login} className="header__option">
            <span className="header__optionLineOne">
              Hello <strong>{returnUserName(user?.email)}</strong>
            </span>
            <span className="header__optionLineTwo">
              {user ? `Sign Out` : `Sign In`}
            </span>
          </div>
        </Link>
        <Link className="header__link" to="/">
          <div className="header__option">
            <span className="header__optionLineOne">Returns</span>
            <span className="header__optionLineTwo">& Orders</span>
          </div>
        </Link>
        <Link className="header__link" to="/">
          <div className="header__option">
            <span className="header__optionLineOne">Your</span>
            <span className="header__optionLineTwo">Prime</span>
          </div>
        </Link>
        <Link className="header__link" to="/checkout">
          <div className="header__optionBasket">
            <ShoppingBasket className="header__shoppingBasket" />
            <span className="header__optionLineTwo header__basketCount">
              {basket.length}
            </span>
          </div>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
