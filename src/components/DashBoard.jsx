import React, { useState } from "react";
import CourseTable from "./CourseTable";
import { useDispatch, useSelector } from "react-redux";
import MiniCart from "./MiniCart";

import Sorting from "./Sorting";

export default function DashBoard() {
  const { courses } = useSelector((state) => state.courses);

  const [list, setList] = useState();

  const [orginalist, setorginalList] = useState(courses);

  const handleSelect = (e) => {
    console.log("Select Handled", e.target.value);
    const sortValue = e.target.value;
    let _list = [...courses];
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
    let _list = [...courses];
    const filtered = _list.filter((course) => {
      return course.title.toLowerCase().startsWith(key.toLowerCase());
    });
    setorginalList(filtered);
  };

  const newList = orginalist.length > 0 ? orginalist : list;

  return (
    <div className="main">
      <Sorting handleChange={handleChange} handleSelect={handleSelect} />
      <div className="container">
        <CourseTable sortedList={newList} />
        <div className="cart">
          <MiniCart />
        </div>
      </div>
    </div>
  );
}
