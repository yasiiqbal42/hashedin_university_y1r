import React from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addToWishlist, addToCart } from "../redux/courses/actions";
import play_button from "../resource/video_play.png";

export default function CourseDetails(props) {
  const { id } = useParams();
  const { courses } = useSelector((state) => state.courses);
  const course = courses.find((course) => course.id === id);
  const dispatch = useDispatch();

  // const obj1 = {
  //   tags: ["accusantium", "suscipit", "adipisci"],
  //   details:
  //     "Incidunt enim veniam. Id fugit odit ipsam et iusto esse est dignissimos eum. Totam ut est nobis consequatur aut consequuntur. Et nesciunt tempore. Eius blanditiis et minima adipisci est dolorum itaque omnis quidem.\n \rInventore vel aperiam necessitatibus consequuntur tempora est est repudiandae quas. Quis natus eos accusantium eaque quaerat tempora suscipit sed. Deserunt voluptatem eius consequatur reiciendis quisquam iure. Totam aut odit eum incidunt suscipit.\n \rEum ut neque et molestiae vel repellat rerum distinctio tempora. Mollitia doloremque nisi nemo eum. Est voluptate aut perferendis consequatur et et. Natus qui voluptatem quia.",
  //   description: "Tempore sed unde laboriosam qui consequatur rem.",
  //   discounted_price: null,
  //   actual_price: "840.00",
  //   author: "Arthur Hansen",
  //   title: "doloribus sapiente facere sit laborum qui",
  //   id: "1",
  // };
  return (
    <div className="course-details">
      <div className="course-nav">
        {"All Courses    >    "}{" "}
        <span style={{ font: "bold" }}> {course.title}</span>
      </div>
      <div className="banner">
        <div className="title_container">
          {" "}
          <div className="main_title">{course.title}</div>
          <div className="mini_title">{course.title}</div>
          <div className="course_detail_author">{course.author}</div>{" "}
          <div className="course_details_tags">
            {course.tags.map((tag) => {
              return <span key={tag}>{tag}</span>;
            })}
          </div>
        </div>
      </div>
      <div className="desc-container">
        <div className="description">
          <p>Course Details</p>
          {course.details}
        </div>
        <div className="course-details-cart">
          <div className="video">
            <img src={play_button} alt="" />
          </div>
          <div className="course_details_price">
            <p className="price customprice">
              {"Rs " + parseInt(course.actual_price) + "/-"}
            </p>
            <p className="discount custom-discount">
              {course.discounted_price}
            </p>
            <p className="discount custom-discount hours-left">
              8 hours left for this price
            </p>
            <div className="course_details_button">
              <button
                onClick={() => dispatch(addToCart(course))}
                className="add_to_cart"
              >
                ADD TO CART
              </button>
              <button
              onClick={() => dispatch(addToWishlist(course))}
              className="add_to_cart">ADD TO WISHLIST</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
