import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Course from "./Course";
import ItemInCart from "./ItemInCart";

export default function Cart() {
  const dispatch = useDispatch();

  const { cart, courses } = useSelector((state) => state.courses);
  const state = useSelector((state) => state);

  //Generating random data for recommendation
  let temp = [...courses];
  const shuffled = temp.sort(() => 0.5 - Math.random());
  let selected = shuffled.slice(0, 2);

  //Total Number of courses in cart
  let total_cart_value =
    cart.length > 0 ? cart.reduce((a, b) => +a + +b.actual_price, 0) : 0;

  return (
    <div className="my-cart-container">
      {console.log(selected)}
      <div className="my-cart-main">
        <div className="item-count">{cart.length + " Courses in Cart"}</div>
        <div className="my-cart-area">
          <div className="item_container">
            <div className="item_container1">
              {cart.map((item) => {
                return (
                  <div className="item" key={item.id}>
                    <ItemInCart course={item} />
                  </div>
                );
              })}
            </div>
            <div className="item_container2">
              <p>Recommended Courses</p>
              {selected.map((item) => {
                return (
                  <div className="course" key={item.id}>
                    <Course
                      course={item}
                      deleteButton={false}
                      addTowishlistIcon={false}
                    />
                  </div>
                );
              })}
              {/* </div> */}
            </div>
          </div>
          <div className="check-out">
            <p className="total_price_label_mini_cart">Total Cart Value</p>
            <p className="total_price_mini_cart">
              {"Rs " + total_cart_value + "/-"}
            </p>
            <button>CHECKOUT</button>
          </div>
        </div>
      </div>
    </div>
  );
}
