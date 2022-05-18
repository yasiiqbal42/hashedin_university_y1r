import React from "react";
import search_icon from "../resource/icons8-search.svg";
import { useDispatch, useSelector } from "react-redux";
import MiniCartItem from "./MiniCartItem";

export default function MiniCart() {
  const { cart } = useSelector((state) => state.courses);

  //Finding the total length
  let total_cart_value =
    cart.length > 0 ? cart.reduce((a, b) => +a + +b.actual_price, 0) : 0;

  return (
    <div className="mini_cart">
      <div className="mini_cart_details">YOUR CART DETAILS</div>
      <div className="mini_cart_item_container">
        {cart.length > 0 ? (
          cart.map((course) => {
            return <MiniCartItem item={course} />;
          })
        ) : (
          <em className="empty_mini_cart">
            {" "}
            Your cart is empty right now. Please add courses in the cart from
            the list
          </em>
        )}
      </div>
      <div className="mini_cart_value">
        <p className="total_price_label_mini_cart">Total Cart Value</p>
        <p className="total_price_mini_cart">
          {"Rs " + total_cart_value + "/-"}
        </p>
      </div>
    </div>
  );
}
