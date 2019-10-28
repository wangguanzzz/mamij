import React from "react";

import MamijNavigator from "./navigation/MamijNavigator";
import { createStore, combineReducers, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import ReduxThunk from "redux-thunk";
import authReducer from "./store/reducers/auth";
import productReducer from "./store/reducers/product";
import locationReducer from "./store/reducers/location";
import { ThemeProvider } from "react-native-elements";
import Colors from "./constants/Colors";

const rootReducer = combineReducers({
  auth: authReducer,
  products: productReducer,
  location: locationReducer
});

const store = createStore(rootReducer, applyMiddleware(ReduxThunk));

const theme = {
  Header: {
    backgroundColor: Colors.primary
  }
};

export default function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <MamijNavigator />
      </ThemeProvider>
    </Provider>
  );
}
