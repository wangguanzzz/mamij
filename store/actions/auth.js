import * as FileSystem from "expo-file-system";
import AV from "leancloud-storage";
import { AsyncStorage } from "react-native";

export const SIGNUP = "SIGNUP";
export const LOGIN = "LOGIN";

AV.init({
  appId: "J9b8lu6jUtEN2bnvpEptJhnq-gzGzoHsz",
  appKey: "79QqXxxyqXIwOpAqX4CDIqPN",
  serverURLs: "https://j9b8lu6j.lc-cn-n1-shared.com"
});

export const login = (username, password) => {
  return async dispatch => {
    try {
      const user = await AV.User.logIn(username, password);
      await saveDataToStorage(user.objectId, user.username);
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

const saveDataToStorage = async (token, userId) => {
  await AsyncStorage.setItem(
    "userData",
    JSON.stringify({ token: token, userId: userId })
  );
};
