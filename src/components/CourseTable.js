import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCourses } from "../redux/courses/actions";
import Course from "./Course";

const CourseTable = ({ sortedList }) => {
  const dispatch = useDispatch();

  const { courses } = useSelector((state) => state.courses);
  const state = useSelector((state) => state);

  const data = sortedList? sortedList: courses;

  useEffect(() => {
    dispatch(getCourses());
  }, []);

  return (
    <div className="course-table">
      {/* {console.log("Filtered Course", filteredCourse)} */}
      {/* {console.log("Sort key-", sortKey)}
      {console.log("Search Key-", searchKey)} */}
      <div className="course-content">
        {data.map((course) => {
          return (
            <div className="course" key={course.id}>
              <Course
                course={course}
                deleteButton={false}
                addTowishlistIcon={true}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default CourseTable;
