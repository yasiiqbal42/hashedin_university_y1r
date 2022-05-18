import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToWishlist,deleteFromCart } from "../redux/courses/actions";
import delete_icon from "../resource/delete.png";

export default function ItemInCart({ course }) {
  const dispatch = useDispatch();
  return (
    <React.Fragment>
      <div className="square square_01"></div>
      <div className="title-author">
        <div className="title">{course.title}</div>
        <div className="author">{course.author}</div>
      </div>
      <div
        onClick={() => dispatch(addToWishlist(course))}
        className="title add-to-cart-01"
      >
        {"ADD TO WISHLIST"}
      </div>
      <div className="price">
        {"Rs " + parseInt(course.actual_price) + "/-"}
      </div>
      <div className="delete_icon_01">
        <img
          className="delete-icon "
          src={delete_icon}
          onClick={() => dispatch(deleteFromCart(course.id))}
        />
      </div>

      {/* <div className="display_course">{">"}</div> */}
    </React.Fragment>
  );
}
