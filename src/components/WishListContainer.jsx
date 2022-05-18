import React from "react";
import { useSelector } from "react-redux";
import Course from "./Course";

export default function WishListContainer({sortedList}) {
  const { wishlist } = useSelector((state) => state.courses);

  // const data = sortedList? sortedList: wishlist;

  // console.log(sortedList);
  return (
    <div className="course-table">
      <div className="course-content">
        {wishlist.map((item) => {
          return (
            <div className="course" key={item.id}>
              <Course course={item} deleteButton={true} />
            </div>
          );
        })}
      </div>
    </div>
  );
}
