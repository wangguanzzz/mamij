import React, { useEffect } from "react";
import {
  View,
  ActivityIndicator,
  StyleSheet,
  AsyncStorage
} from "react-native";

const StartupScreen = props => {
  useEffect(() => {
    const tryLogin = async () => {
      const userData = await AsyncStorage.getItem("userData");
      if (!userData) {
        props.navigation.navigate("Auth");
        return;
      }

      const transformedData = JSON.parse(userData);
      const { token, userId } = transformedData;
      props.navigation.navigate("Orders");
    };
    tryLogin();
  }, []);
  return <View></View>;
};
const styles = StyleSheet.create({});

export default StartupScreen;
