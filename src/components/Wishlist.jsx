import React, { useState } from "react";
import MiniCart from "./MiniCart";
import Sorting from "./Sorting";
import { useSelector } from "react-redux";

import WishListContainer from "./WishListContainer";

export default function Wishlist() {
  const { wishlist } = useSelector((state) => state.courses);

  const [list, setList] = useState();

  const [orginalist, setorginalList] = useState(wishlist);

  const handleSelect = (e) => {
    console.log("Select Handled", e.target.value);
    const sortValue = e.target.value;
    let _list = [...wishlist];
    if (sortValue === "low") {
      const sortedArray = _list.sort((a, b) => a.actual_price - b.actual_price);
      setList(sortedArray);
    } else if (sortValue === "high") {
      const sortedArray = _list.sort((a, b) => b.actual_price - a.actual_price);
      setList(sortedArray);
    }
  };

  const handleChange = (e) => {
    console.log("Change Handled");
    const key = e.target.value;
    let _list = [...wishlist];
    const filtered = _list.filter((course) => {
      return course.title.toLowerCase().startsWith(key.toLowerCase());
    });
    setorginalList(filtered);
  };
  let newlist = [];

  if (wishlist) {
    newlist = orginalist.length > 0 ? orginalist : list;
  }

  return (
    <div className="main">
      <Sorting handleChange={handleChange} handleSelect={handleSelect} />
      <div className="container">
        <WishListContainer sortedList={newlist} />
        <div className="cart">
          <MiniCart />
        </div>
      </div>
    </div>
  );
}
