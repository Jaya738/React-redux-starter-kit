import { createStore, combineReducers } from "redux";
import _ from "lodash";
import config from "./reducers/config";
import { getFromLocalStorage, setInLocalStorage } from "./storageHelper";

const persistedState = getFromLocalStorage('state');

const rootReducer = combineReducers({
  config,
});

const Store = createStore(
  rootReducer,
  persistedState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

Store.subscribe(
  _.throttle(() => {
    setInLocalStorage('state', {
    config: Store.getState().config,
    });
  }, 1000)
);

export default Store;
