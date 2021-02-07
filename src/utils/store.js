import { createStore, combineReducers } from "redux";
import _ from "lodash";
// import cartReducer from "./reducers/cartReducer";
import { loadState, saveState } from "./localStorage";

const persistedState = loadState();

const rootReducer = combineReducers({
//   cart: cartReducer,
});

const Store = createStore(
  rootReducer,
  persistedState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

Store.subscribe(
  _.throttle(() => {
    saveState({
    //   cart: Store.getState().cart,
    });
  }, 1000)
);

export default Store;
