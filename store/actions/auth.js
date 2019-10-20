import * as FileSystem from "expo-file-system";
import AV from "leancloud-storage";

export const SIGNUP = "SIGNUP";

AV.init({
  appId: "J9b8lu6jUtEN2bnvpEptJhnq-gzGzoHsz",
  appKey: "79QqXxxyqXIwOpAqX4CDIqPN",
  serverURLs: "https://j9b8lu6j.lc-cn-n1-shared.com"
});

export const signup = (username, password) => {
  return async dispatch => {
    const user = new AV.User();
    user.setUsername("test");
    user.setPassword("password");
    // user.setMobilePhoneNumber("+8615901984160");
    try {
      const newUser = await user.signUp();
      console.log(newUser);
    } catch (err) {
      console.log(err);
    }
    dispatch({
      type: SIGNUP,
      authData: {}
    });
  };
};
