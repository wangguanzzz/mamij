import * as FileSystem from "expo-file-system";

import { AsyncStorage } from "react-native";
import AV from "../../components/UI/AV";

export const SIGNUP = "SIGNUP";
export const LOGIN = "LOGIN";
export const AUTHENTICATE = "AUTHENTICATE";

export const login = (username, password) => {
  return async dispatch => {
    try {
      const user = await AV.User.logIn(username, password);
      // await saveDataToStorage(user.objectId, user.username);
      console.log(user);
    } catch (err) {
      throw err;
    }
  };
};
export const signup = (username, password) => {
  return async dispatch => {
    const user = new AV.User();
    user.setUsername(username);
    user.setPassword(password);
    user.setEmail(username);
    try {
      const newUser = await user.signUp();
    } catch (err) {
      throw err;
    }
    dispatch({
      type: SIGNUP,
      authData: {}
    });
  };
};

export const authenticate = () => {
  return async dispatch => {
    const user = AV.User.current();
  };
};
const saveDataToStorage = async (token, userId) => {
  await AsyncStorage.setItem(
    "userData",
    JSON.stringify({ token: token, userId: userId })
  );
};
