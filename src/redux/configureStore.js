import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import { Dishes } from "./dishes";
import { Comments } from "./comments";
import { Promotions } from "./promotions";
import { Leaders } from "./leaders";
import thunk from "redux-thunk";
import logger from "redux-logger";

const store = () =>
  configureStore({
    reducer: combineReducers({
      dishes: Dishes,
      comments: Comments,
      promotions: Promotions,
      leaders: Leaders,
    }),
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(thunk, logger),
  });

export default store;
