import React from "react";
import { View, StyleSheet, ImageBackground, Dimensions } from "react-native";
import { Icon, Text, Button } from "react-native-elements";

const BG_IMAGE = require("../assets/images/background.jpg");
const SCREEN_WIDTH = Dimensions.get("window").width;
const SCREEN_HEIGHT = Dimensions.get("window").height;

const WechatLoginScreen = props => {
  return (
    <View style={styles.container}>
      <ImageBackground source={BG_IMAGE} style={styles.bgImage}>
        <View style={styles.headerContainer}>
          <Icon color="white" name="search" size={62} />
          <Text style={styles.heading}>美极星</Text>
        </View>
        <Button
          title="微信登陆"
          buttonStyle={styles.loginButton}
          containerStyle={{ marginVertical: 10, height: 100, width: 300 }}
        />
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  bgImage: {
    flex: 1,
    top: 0,
    left: 0,
    width: SCREEN_WIDTH,
    height: SCREEN_HEIGHT,
    justifyContent: "center",
    alignItems: "center"
  },
  headerContainer: {
    justifyContent: "center",
    alignItems: "center",
    padding: 40,
    width: "100%",
    backgroundColor: "#B46486"
  },
  heading: {
    color: "white",
    marginTop: 10,
    fontSize: 22,
    fontWeight: "bold"
  },
  loginButton: {
    backgroundColor: "green",
    borderWidth: 2,
    borderColor: "white",
    borderRadius: 30
  }
});

export default WechatLoginScreen;
