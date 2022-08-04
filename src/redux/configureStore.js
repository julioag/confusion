import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import { Dishes } from "./dishes";
import { Comments } from "./comments";
import { Promotions } from "./promotions";
import { Leaders } from "./leaders";
import thunk from "redux-thunk";
import logger from "redux-logger";
import { InitialFeedback } from "./forms";
import { createForms } from "react-redux-form";

const store = () =>
  configureStore({
    reducer: combineReducers({
      dishes: Dishes,
      comments: Comments,
      promotions: Promotions,
      leaders: Leaders,
      ...createForms({
        feedback: InitialFeedback,
      }),
    }),
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(thunk, logger),
  });

export default store;
