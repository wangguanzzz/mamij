import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import {
  View,
  ActivityIndicator,
  StyleSheet,
  AsyncStorage
} from "react-native";
import AV from "../components/UI/AV";

const StartupScreen = props => {
  useEffect(() => {
    const tryLogin = async () => {
      const user = await AV.User.currentAsync();
      if (!user) {
        props.navigation.navigate("Auth");
        return;
      }
      props.navigation.navigate("Orders");
      return;
    };
    tryLogin();
  }, []);
  return <View></View>;
};
const styles = StyleSheet.create({});

export default StartupScreen;
