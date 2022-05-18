import axios from "axios";
export const GET_ALL_COURSES = "GET_ALL_COURSES";
export const GET_COURSE_BY_ID = "GET_COURSE_BY_ID";

// export const ADD_TO_CART = "ADD_TO_CART";
// export const DELETE_FROM_CART = "DELETE_FROM_CART";

// export const ADD_TO_WISHLIST = "ADD_TO_WISHLIST";
// export const DELETE_FROM_WISHLIST = "DELETE_FROM_WISHLIST";

const URL = "https://627cfe98bf2deb7174e560df.mockapi.io/courses";

export const getCourses = () => {
  return async (dispatch) => {
    try {
      const response = await axios.get(URL);
      dispatch({ type: GET_ALL_COURSES, payload: response.data });
    } catch (error) {
      console.log(error);
    }
  };
};

export const addToWishlist = (data) => {
  return {
    type: "ADD_TO_WISHLIST",
    payload: data,
  };
};

export const removeFromWishlist = (id) => {
  console.log("Inside removeFromWishlist action");
  return {
    type: "REMOVE_FROM_WISHLIST",
    payload: id,
  };
};

export const addToCart = (data) => {
  return {
    type: "ADD_TO_CART",
    payload: data,
  };
};

export const deleteFromCart = (id) => {
  return {
    type: "DELETE_FROM_CART",
    payload: id,
  };
};


export const setProfileData = (data) => {
  return {
    type: "SET_PROFILE_DATA",
    payload: data,
  };
};
