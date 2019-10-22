import React from "react";

import MamijNavigator from "./navigation/MamijNavigator";
import { createStore, combineReducers, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import ReduxThunk from "redux-thunk";
import authReducer from "./store/reducers/auth";
<<<<<<< HEAD
import productReducer from "./store/reducers/product";

const rootReducer = combineReducers({
  auth: authReducer,
  products: productReducer
=======

const rootReducer = combineReducers({
  auth: authReducer
>>>>>>> 49e981bbecc6754ace1f340005cc1db079493306
});

const store = createStore(rootReducer, applyMiddleware(ReduxThunk));

export default function App() {
  return (
    <Provider store={store}>
      <MamijNavigator />
    </Provider>
  );
}
