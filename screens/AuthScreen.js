import React, { useState } from "react";
import { View, StyleSheet, ActivityIndicator } from "react-native";
import { Text, Input, Button } from "react-native-elements";
import { useDispatch } from "react-redux";
import * as AuthActions from "../store/actions/auth";
import Colors from "../constants/Colors";

const AuthScreen = props => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();

  const changeUsernameHandler = text => {
    setUsername(text);
  };

  const changePasswordHandler = text => {
    setPassword(text);
  };

  const signupHandler = async () => {
    try {
      setIsLoading(true);
      await dispatch(AuthActions.signup(username, password));
    } catch (err) {
      console.log(err);
    }
    setIsLoading(false);
  };
  const loginHandler = async () => {
    try {
      setIsLoading(true);
      dispatch(AuthActions.login(username, password));
      props.navigation.navigate("Orders");
    } catch (err) {
      console.log(err);
    }
    setIsLoading(false);
  };

  return (
    <View style={styles.authContainer}>
      <View style={styles.logoContainer}>
        <Text>Logo</Text>
      </View>
      <View style={styles.formContainer}>
        {isLoading ? (
          <ActivityIndicator size="small" color={Colors.primary} />
        ) : (
          <View>
            <Input
              label={"手机号码"}
              placeholder=""
              leftIcon={{
                type: "font-awesome",
                name: "mobile",
                marginRight: 10
              }}
              onChangeText={changeUsernameHandler}
              value={username}
              keyboardType="phone-pad"
            />
            <Input
              label={"密码"}
              placeholder=""
              leftIcon={{ type: "font-awesome", name: "lock", marginRight: 10 }}
              onChangeText={changePasswordHandler}
              value={password}
              secureTextEntry={true}
            />
          </View>
        )}
      </View>
      <View style={styles.button}>
        <Button title="登陆" onPress={loginHandler} />
      </View>
      <View style={styles.button}>
        <Button title="注册" onPress={signupHandler} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  authContainer: { alignItems: "center", justifyContent: "center" },
  logoContainer: { height: 100, width: "80%" },
  formContainer: {
    width: "80%",
    margin: 15
  },
  button: { width: "80%", margin: 10 }
});

export default AuthScreen;
