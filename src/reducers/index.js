import config from "./config.js";
import orders from "./orders.js";
import user from "./user";
import { combineReducers as combine } from "redux";

export const combineReducers = () =>
  combine({
    config,
    orders,
    user,
  });
