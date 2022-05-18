import { combineReducers, applyMiddleware } from "redux";

import { configureStore } from "@reduxjs/toolkit";

import coursesReducer from "./courses/courseReducer";

import thunk from "redux-thunk";

const reducer = combineReducers({
  courses: coursesReducer,
});

export const store = configureStore(
  { reducer: reducer },

  applyMiddleware(thunk)
);
