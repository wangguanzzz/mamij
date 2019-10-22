import React from "react";

import MamijNavigator from "./navigation/MamijNavigator";
import { createStore, combineReducers, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import ReduxThunk from "redux-thunk";
import authReducer from "./store/reducers/auth";
import productReducer from "./store/reducers/product";

const rootReducer = combineReducers({
  auth: authReducer,
  products: productReducer
});

const store = createStore(rootReducer, applyMiddleware(ReduxThunk));

export default function App() {
  return (
    <Provider store={store}>
      <MamijNavigator />
    </Provider>
  );
}
