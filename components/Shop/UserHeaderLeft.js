import React from "react";
import { View, StyleSheet } from "react-native";
import { Icon, Text } from "react-native-elements";

const UserHeaderLeft = props => {
  const { iconName, iconType, headerTitle } = props;
  return (
    <View style={sytles.container}>
      <Icon name={iconName} size={25} type={iconType} />
      <Text style={sytles.text}>{headerTitle}</Text>
    </View>
  );
};

const sytles = StyleSheet.create({
  container: {
    flexDirection: "row"
  },
  text: { fontSize: 20 }
});

export default UserHeaderLeft;
