import React, { useState } from "react";
import search_icon from "../resource/icons8-search.svg";

export default function Sorting({handleChange,handleSelect}) {
  
  return (
    <div className="searching_sorting">
      <div className="sorting">
        <p>All Courses</p>
        <select
          defaultValue={"DEFAULT"}
          onChange={(e) => handleSelect(e)}
          name="course_price"
          id="course"
        >
          <option value="DEFAULT" disabled>
            Course Price
          </option>
          <option value="low">Low to High</option>
          <option value="high">High to Low</option>
        </select>
      </div>
      <div className="searching">
        <input
          type="text"
          placeholder="Search here"
          name="mini_cart_search"
          id=""
          // onChange={(e) => handleChange(e)}
          onChange={(e)=>handleChange(e)}
        />
        <button>
          <img src={search_icon} className="mini_cart_search_img" alt="" />
        </button>
      </div>
    </div>
  );
}
