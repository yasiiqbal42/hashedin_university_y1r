import React, { useState } from "react";
import yellow_star from "../resource/star.svg";
import grey_star from "../resource/svg_1.svg";
import delete_icon from "../resource/delete.png";
import { useDispatch, useSelector } from "react-redux";
import { addToWishlist, addToCart } from "../redux/courses/actions";
import { removeFromWishlist } from "../redux/courses/actions";
import { NavLink } from "react-router-dom";

export default function Course({ course, deleteButton, addTowishlistIcon }) {
  let star = grey_star;

  const { errors } = useSelector((state) => state.courses);

  const dispatch = useDispatch();

  const [wishlistFlag, setWishlistFlag] = useState(false);

  const handleWishlist = () => {
    setWishlistFlag((flag) => !flag);
    // ? dispatch(addToWishlist(course))
    // : dispatch(removeFromWishlist(course.id));

    dispatch(addToWishlist(course));
  };

  const getDeleteButton = () => {
    if (deleteButton) {
      return (
        <img
          className="delete-icon"
          src={delete_icon}
          onClick={() => dispatch(removeFromWishlist(course.id))}
        />
      );
    }
  };
  const getWishListIcon = () => {
    if (addTowishlistIcon) {
      return (
        <div className="add-to-wishlist">
          <img
            // onClick={() => dispatch(addToWishlist(course))}
            onClick={handleWishlist}
            src={wishlistFlag ? yellow_star : grey_star}
            alt=""
            className="star"
          />
        </div>
      );
    }
  };

  const handleAddToCart = (course) => {
    dispatch(addToCart(course));
    if (errors) alert(errors);
    else alert("Added Successfully in Cart");
  };

  return (
    <React.Fragment>
      <div className="square"></div>
      <div className="title-container">
        <div className="title">{course.title}</div>
        <div className="tags">
          {course.tags.map((tag) => {
            return <span key={tag}>{tag}</span>;
          })}
        </div>
      </div>
      <div className="author">{course.author}</div>
      {getWishListIcon()}

      <div className="price">
        {"Rs " + parseInt(course.actual_price) + "/-"}
      </div>
      <div className="discount">
        {course.discounted_price
          ? "Rs " + parseInt(course.discounted_price) + "/"
          : "-"}
      </div>
      {getDeleteButton()}
      <div className="add_to_cart">
        <button onClick={() => dispatch(addToCart(course))}>ADD TO CART</button>
        {/* <button onClick={() => handleAddToCart(course)}>ADD TO CART</button> */}
      </div>
      {/* <div className="display_course">{">"}</div> */}
      <NavLink
        className="display_course"
        to={"/courses/course_details/" + course.id}
      >
        {">"}
      </NavLink>
    </React.Fragment>
  );
}
