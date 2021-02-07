import { SET_ACTIVE_ORDERS } from "../actions/types";
import mockData from "../api/mock";
export const defaultState = {
  activeOrders: mockData.orders,
};

const setActiveOrders = (state, action) => ({
  ...state,
  ...action.payload,
});

export default (state = defaultState, action) => {
  const handlers = {
    [SET_ACTIVE_ORDERS]: setActiveOrders,
  };
  return handlers[action.type] ? handlers[action.type](state, action) : state;
};
